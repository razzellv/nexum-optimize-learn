import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: string;
}

const Videos = () => {
  const navigate = useNavigate();
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  // Simulated video data - in production, this would fetch from YouTube API
  const generateMockVideos = () => {
    const categories = ["compliance", "facilities", "hvac", "engineering", "ehs", "safety", "efficiency"];
    const mockVideos: Video[] = [];

    const videoTopics = [
      { title: "OSHA Compliance Training for Facility Managers", category: "compliance" },
      { title: "Modern HVAC System Optimization Techniques", category: "hvac" },
      { title: "Facility Engineering Best Practices 2025", category: "engineering" },
      { title: "Industrial Safety Protocols and Standards", category: "safety" },
      { title: "Energy Efficiency in Large Facilities", category: "efficiency" },
      { title: "EHS Management System Implementation", category: "ehs" },
      { title: "Preventive Maintenance Strategies", category: "facilities" },
      { title: "Boiler Safety and Compliance Updates", category: "compliance" },
      { title: "Chiller Plant Optimization Guide", category: "hvac" },
      { title: "Digital Transformation in Facility Management", category: "engineering" },
      { title: "Workplace Safety Culture Development", category: "safety" },
      { title: "Building Automation Systems Tutorial", category: "efficiency" },
    ];

    videoTopics.forEach((topic, index) => {
      mockVideos.push({
        id: `video-${index + 1}`,
        title: topic.title,
        description: `Learn about ${topic.title.toLowerCase()} with expert guidance and practical examples.`,
        thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg`, // Placeholder
        category: topic.category,
      });
    });

    // Shuffle array to simulate random selection
    return mockVideos.sort(() => Math.random() - 0.5);
  };

  useEffect(() => {
    // Simulate API call delay
    setTimeout(() => {
      setVideos(generateMockVideos());
      setLoading(false);
      toast.success("Videos loaded successfully");
    }, 1000);
  }, []);

  const handleRefresh = () => {
    setLoading(true);
    setTimeout(() => {
      setVideos(generateMockVideos());
      setLoading(false);
      toast.success("Videos refreshed");
    }, 500);
  };

  const openYouTubeSearch = (query: string) => {
    const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
    window.open(searchUrl, "_blank");
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="mr-2" />
            Back to Dashboard
          </Button>
          
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold mb-3 flex items-center gap-3">
                <Youtube className="w-10 h-10 text-destructive" />
                Training Videos
              </h1>
              <p className="text-lg text-muted-foreground">
                Curated video content on compliance, engineering, safety, and facility management
              </p>
            </div>
            <Button onClick={handleRefresh} disabled={loading}>
              Refresh Videos
            </Button>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading videos...</p>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video) => (
              <Card 
                key={video.id} 
                className="shadow-soft hover:shadow-medium transition-smooth cursor-pointer"
                onClick={() => openYouTubeSearch(video.title)}
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                      <Youtube className="w-16 h-16 text-white" />
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="absolute top-2 right-2 capitalize"
                    >
                      {video.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-base mb-2 line-clamp-2">
                    {video.title}
                  </CardTitle>
                  <CardDescription className="text-sm line-clamp-2 mb-3">
                    {video.description}
                  </CardDescription>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      openYouTubeSearch(video.title);
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Watch on YouTube
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <Card className="mt-8 shadow-soft border-secondary/30">
          <CardHeader>
            <CardTitle>About These Videos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This page displays curated video content related to facility engineering, compliance, HVAC systems, 
              safety protocols, and industry best practices. Click on any video to search for it on YouTube. 
              In a production environment, this would integrate with the YouTube Data API to fetch real-time content.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Videos;
