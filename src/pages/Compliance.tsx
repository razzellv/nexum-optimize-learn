import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, FileText, ExternalLink, Trash2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { z } from "zod";

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

const fileUploadSchema = z.object({
  name: z.string().min(1, "File name is required").max(255, "File name too long"),
  size: z.number().max(MAX_FILE_SIZE, "File size must be less than 50MB"),
  type: z.literal("application/pdf", { errorMap: () => ({ message: "Only PDF files are allowed" }) })
});

interface ComplianceFile {
  id: string;
  file_name: string;
  file_url: string;
  created_at: string;
}

const Compliance = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useAuth();
  const [files, setFiles] = useState<ComplianceFile[]>([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    loadFiles();
    checkAdminStatus();
  }, [user]);

  const checkAdminStatus = async () => {
    if (!user) return;
    
    const { data, error } = await supabase
      .rpc('has_role', { _user_id: user.sub, _role: 'admin' });
    
    if (!error && data) {
      setIsAdmin(true);
    }
  };

  const loadFiles = async () => {
    const { data, error } = await supabase
      .from('compliance_files')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      toast({
        title: "Error loading files",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    setFiles(data || []);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    if (isAdmin) {
      setIsDragging(true);
    }
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    if (!isAdmin) {
      toast({
        title: "Access Denied",
        description: "Only administrators can upload files",
        variant: "destructive",
      });
      return;
    }

    const droppedFiles = Array.from(e.dataTransfer.files);
    const pdfFiles = droppedFiles.filter(file => file.type === 'application/pdf');

    if (pdfFiles.length === 0) {
      toast({
        title: "Invalid file type",
        description: "Please upload PDF files only",
        variant: "destructive",
      });
      return;
    }

    await uploadFiles(pdfFiles);
  };

  const handleFileInput = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || !isAdmin) return;
    
    const selectedFiles = Array.from(e.target.files);
    await uploadFiles(selectedFiles);
  };

  const uploadFiles = async (filesToUpload: File[]) => {
    setIsUploading(true);

    for (const file of filesToUpload) {
      try {
        // Validate file
        const validation = fileUploadSchema.safeParse({
          name: file.name,
          size: file.size,
          type: file.type
        });

        if (!validation.success) {
          toast({
            title: "Invalid file",
            description: validation.error.errors[0].message,
            variant: "destructive",
          });
          continue;
        }

        // Sanitize filename and use crypto for random generation
        const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const fileExt = sanitizedName.split('.').pop();
        const fileName = `${crypto.randomUUID()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('compliance-files')
          .upload(filePath, file);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('compliance-files')
          .getPublicUrl(filePath);

        const { error: dbError } = await supabase
          .from('compliance_files')
          .insert({
            file_name: sanitizedName,
            file_path: filePath,
            file_url: publicUrl,
            uploaded_by: user?.sub,
          });

        if (dbError) throw dbError;

        toast({
          title: "File uploaded",
          description: `${sanitizedName} uploaded successfully`,
        });
      } catch (error: any) {
        toast({
          title: "Upload failed",
          description: error.message,
          variant: "destructive",
        });
      }
    }

    setIsUploading(false);
    loadFiles();
  };

  const handleDelete = async (fileId: string, filePath: string) => {
    if (!isAdmin) return;

    try {
      const { error: storageError } = await supabase.storage
        .from('compliance-files')
        .remove([filePath]);

      if (storageError) throw storageError;

      const { error: dbError } = await supabase
        .from('compliance_files')
        .delete()
        .eq('id', fileId);

      if (dbError) throw dbError;

      toast({
        title: "File deleted",
        description: "File removed successfully",
      });

      loadFiles();
    } catch (error: any) {
      toast({
        title: "Delete failed",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-primary/5">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Compliance Center</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Maintain audit readiness, operational clarity, and OSHA compliance with our comprehensive resource library
            </p>
          </div>

          {/* Visual Compliance Library */}
          <Card className="p-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Visual Compliance Library</h2>
                {isAdmin && (
                  <label htmlFor="file-upload">
                    <Button asChild variant="outline" disabled={isUploading}>
                      <span className="cursor-pointer">
                        <Upload className="w-4 h-4 mr-2" />
                        Upload PDF
                      </span>
                    </Button>
                    <input
                      id="file-upload"
                      type="file"
                      accept=".pdf"
                      multiple
                      className="hidden"
                      onChange={handleFileInput}
                    />
                  </label>
                )}
              </div>

              {/* Drag and Drop Zone */}
              {isAdmin && (
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
                    isDragging
                      ? "border-primary bg-primary/5"
                      : "border-border bg-muted/30"
                  }`}
                >
                  <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-lg font-medium mb-2">
                    Drag and drop PDF files here
                  </p>
                  <p className="text-sm text-muted-foreground">
                    or click the Upload button above
                  </p>
                </div>
              )}

              {/* File Grid */}
              {files.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {files.map((file) => (
                    <Card
                      key={file.id}
                      className="p-4 hover:shadow-lg transition-shadow group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <FileText className="w-8 h-8 text-primary" />
                        {isAdmin && (
                          <Button
                            variant="ghost"
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => handleDelete(file.id, file.file_url.split('/').pop() || '')}
                          >
                            <Trash2 className="w-4 h-4 text-destructive" />
                          </Button>
                        )}
                      </div>
                      <h3 className="font-medium text-sm mb-2 line-clamp-2">
                        {file.file_name}
                      </h3>
                      <p className="text-xs text-muted-foreground mb-3">
                        {new Date(file.created_at).toLocaleDateString()}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        onClick={() => window.open(file.file_url, '_blank')}
                      >
                        <ExternalLink className="w-3 h-3 mr-2" />
                        View PDF
                      </Button>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-muted-foreground">
                    No compliance documents uploaded yet
                  </p>
                  {isAdmin && (
                    <p className="text-sm text-muted-foreground mt-2">
                      Upload PDFs to get started
                    </p>
                  )}
                </div>
              )}
            </div>
          </Card>

          {/* Launch Compliance Course Button */}
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigate('/')}
              className="text-lg px-8 py-6"
            >
              Launch Compliance Course →
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Compliance;
