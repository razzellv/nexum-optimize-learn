import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, TrendingUp, AlertCircle, Lightbulb, ShieldCheck, Zap, Factory } from "lucide-react";
import { useNavigate } from "react-router-dom";

const IndustryFeed = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("all");

  const feedItems = [
    {
      id: 1,
      category: "compliance",
      title: "New OSHA Standards for Boiler Safety Released",
      description: "OSHA has updated safety standards for pressure vessel operations, effective Q2 2025.",
      date: "2025-10-08",
      type: "regulatory",
      icon: ShieldCheck,
    },
    {
      id: 2,
      category: "hvac",
      title: "Energy Efficiency Breakthrough in Chiller Technology",
      description: "New magnetic bearing chillers show 30% improvement in energy consumption over traditional systems.",
      date: "2025-10-07",
      type: "good",
      icon: Zap,
    },
    {
      id: 3,
      category: "facilities",
      title: "Maintenance Best Practices for Critical Infrastructure",
      description: "Industry leaders share insights on predictive maintenance strategies that reduced downtime by 40%.",
      date: "2025-10-06",
      type: "tip",
      icon: Factory,
    },
    {
      id: 4,
      category: "ehs",
      title: "EPA Releases Updated Air Quality Guidelines",
      description: "New emissions standards for industrial facilities require monitoring system upgrades by December 2025.",
      date: "2025-10-05",
      type: "regulatory",
      icon: AlertCircle,
    },
    {
      id: 5,
      category: "engineering",
      title: "Digital Twin Technology Transforms Facility Management",
      description: "Case study: Fortune 500 company reduces energy costs by 25% using real-time digital twin simulations.",
      date: "2025-10-04",
      type: "good",
      icon: TrendingUp,
    },
    {
      id: 6,
      category: "safety",
      title: "Critical Safety Alert: Pressure Relief Valve Recalls",
      description: "Manufacturer issues recall for PRV models installed in 2023-2024. Check your equipment immediately.",
      date: "2025-10-03",
      type: "bad",
      icon: AlertCircle,
    },
    {
      id: 7,
      category: "efficiency",
      title: "AI-Powered Energy Management Systems Show Promise",
      description: "Machine learning algorithms optimize HVAC operations in real-time, delivering 15-20% energy savings.",
      date: "2025-10-02",
      type: "tip",
      icon: Lightbulb,
    },
    {
      id: 8,
      category: "growth",
      title: "Industrial Facilities Market Projected to Grow 8% in 2025",
      description: "Investment in facility modernization and automation driving unprecedented growth opportunities.",
      date: "2025-10-01",
      type: "good",
      icon: TrendingUp,
    },
  ];

  const filteredItems = activeTab === "all" 
    ? feedItems 
    : feedItems.filter(item => item.category === activeTab);

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      compliance: "border-destructive/30",
      hvac: "border-primary/30",
      facilities: "border-secondary/30",
      ehs: "border-accent/30",
      engineering: "border-success/30",
      safety: "border-destructive/30",
      efficiency: "border-primary/30",
      growth: "border-success/30",
    };
    return colors[category] || "border-muted/30";
  };

  const getTypeColor = (type: string) => {
    const colors: Record<string, string> = {
      good: "success",
      bad: "destructive",
      tip: "secondary",
      regulatory: "default",
    };
    return colors[type] || "default";
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
          
          <h1 className="text-4xl font-bold mb-3">Industry Feed</h1>
          <p className="text-lg text-muted-foreground">
            Stay updated with the latest in compliance, facilities, HVAC, engineering, and safety news
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-9">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="facilities">Facilities</TabsTrigger>
            <TabsTrigger value="hvac">HVAC</TabsTrigger>
            <TabsTrigger value="engineering">Engineering</TabsTrigger>
            <TabsTrigger value="ehs">EHS</TabsTrigger>
            <TabsTrigger value="safety">Safety</TabsTrigger>
            <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
            <TabsTrigger value="growth">Growth</TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            {filteredItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card 
                  key={item.id} 
                  className={`shadow-soft hover:shadow-medium transition-smooth ${getCategoryColor(item.category)}`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline" className="capitalize">
                            {item.category}
                          </Badge>
                          <Badge variant={getTypeColor(item.type) as any}>
                            {item.type}
                          </Badge>
                          <span className="text-sm text-muted-foreground">{item.date}</span>
                        </div>
                        <CardTitle className="flex items-center gap-2 text-xl">
                          <Icon className="w-5 h-5" />
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default IndustryFeed;
