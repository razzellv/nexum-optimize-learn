import { Button } from "@/components/ui/button";
import { ArrowRight, Award, TrendingUp, ShieldCheck } from "lucide-react";

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero = ({ onGetStarted }: HeroProps) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Logo/Brand */}
          <div className="inline-flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 gradient-secondary rounded-lg flex items-center justify-center shadow-glow">
              <Award className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-primary-foreground">Nexum Suum</h2>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            Compliance & Optimization
            <span className="block mt-2 bg-gradient-to-r from-secondary via-accent to-secondary bg-clip-text text-transparent animate-pulse">
              Training Series
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
            Master facility engineering with AI-powered training that combines technical excellence, 
            regulatory compliance, and forward-thinking leadership for the engineer of 2035.
          </p>

          {/* Feature highlights */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-8">
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 transition-smooth hover:shadow-glow">
              <TrendingUp className="w-10 h-10 text-secondary mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Performance Optimization</h3>
              <p className="text-primary-foreground/80 text-sm">Maximize efficiency across boilers, chillers, HVAC, and electrical systems</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 transition-smooth hover:shadow-glow">
              <ShieldCheck className="w-10 h-10 text-accent mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Full Compliance</h3>
              <p className="text-primary-foreground/80 text-sm">Master OSHA, EPA, FDA, ASME, and state-specific regulations</p>
            </div>
            
            <div className="bg-card/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-6 transition-smooth hover:shadow-glow">
              <Award className="w-10 h-10 text-success mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Leadership Excellence</h3>
              <p className="text-primary-foreground/80 text-sm">Develop decision-making skills for critical facility operations</p>
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button 
              variant="secondary" 
              size="lg" 
              onClick={onGetStarted}
              className="text-lg px-8 py-6 shadow-glow hover:scale-105 transition-bounce"
            >
              Begin Training
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 bg-card/20 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-card/30"
            >
              View Curriculum
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12 border-t border-primary-foreground/20">
            <div>
              <div className="text-3xl font-bold text-secondary">10</div>
              <div className="text-sm text-primary-foreground/70">Modules</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">~10hrs</div>
              <div className="text-sm text-primary-foreground/70">Total Duration</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-success">8+</div>
              <div className="text-sm text-primary-foreground/70">Standards Covered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
