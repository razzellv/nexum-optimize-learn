-- Create storage bucket for compliance PDFs
INSERT INTO storage.buckets (id, name, public)
VALUES ('compliance-files', 'compliance-files', true)
ON CONFLICT (id) DO NOTHING;

-- Create table to track compliance files
CREATE TABLE public.compliance_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  file_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_url TEXT NOT NULL,
  uploaded_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.compliance_files ENABLE ROW LEVEL SECURITY;

-- Anyone can view compliance files
CREATE POLICY "Anyone can view compliance files"
ON public.compliance_files
FOR SELECT
USING (true);

-- Only admins can insert compliance files
CREATE POLICY "Admins can insert compliance files"
ON public.compliance_files
FOR INSERT
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can update compliance files
CREATE POLICY "Admins can update compliance files"
ON public.compliance_files
FOR UPDATE
USING (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete compliance files
CREATE POLICY "Admins can delete compliance files"
ON public.compliance_files
FOR DELETE
USING (public.has_role(auth.uid(), 'admin'));

-- Storage policies for compliance files
CREATE POLICY "Anyone can view compliance files"
ON storage.objects
FOR SELECT
USING (bucket_id = 'compliance-files');

CREATE POLICY "Admins can upload compliance files"
ON storage.objects
FOR INSERT
WITH CHECK (
  bucket_id = 'compliance-files' AND
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins can update compliance files"
ON storage.objects
FOR UPDATE
USING (
  bucket_id = 'compliance-files' AND
  public.has_role(auth.uid(), 'admin')
);

CREATE POLICY "Admins can delete compliance files"
ON storage.objects
FOR DELETE
USING (
  bucket_id = 'compliance-files' AND
  public.has_role(auth.uid(), 'admin')
);

-- Trigger for updated_at
CREATE TRIGGER update_compliance_files_updated_at
BEFORE UPDATE ON public.compliance_files
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();