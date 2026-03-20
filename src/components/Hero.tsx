import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Award, TrendingUp, ShieldCheck, GraduationCap, BookOpen, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useLMSAuth } from "@/hooks/useAuth";

interface HeroProps {
  onGetStarted: () => void;
  onViewCurriculum: () => void;
}

export const Hero = ({ onGetStarted, onViewCurriculum }: HeroProps) => {
  const navigate = useNavigate();
  const { user, isReadOnly } = useLMSAuth();

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-xs text-muted-foreground uppercase tracking-widest">Nexum Suum</p>
              <h2 className="text-lg font-bold text-foreground leading-none">Optimize & Learn™</h2>
            </div>
          </div>
          {user && (
            <div className="flex items-center justify-center gap-2">
              <Badge variant="outline" className="border-primary/30 text-primary text-xs">{user.role?.toUpperCase()}</Badge>
              <span className="text-sm text-muted-foreground">Welcome back, {user.name.split(' ')[0]}</span>
              {isReadOnly && <Badge variant="outline" className="text-xs">View Only</Badge>}
            </div>
          )}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
            Compliance & <span className="text-primary">Optimization</span>
            <span className="block mt-2 text-foreground/80 text-4xl md:text-5xl">Training Series</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Master facility engineering with AI-powered training combining technical excellence,
            regulatory compliance, and forward-thinking leadership.
          </p>
          <div onClick={() => navigate('/apprentice')}
            className="inline-flex items-center gap-3 bg-success/10 border border-success/30 rounded-full px-6 py-3 cursor-pointer hover:bg-success/20 transition-all group">
            <GraduationCap className="w-5 h-5 text-success" />
            <span className="text-sm font-medium text-foreground">Free: Facility Intelligence Apprentice Certification</span>
            <ArrowRight className="w-4 h-4 text-success group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto pt-6">
            {[
              { icon: TrendingUp, color: 'text-primary', bg: 'bg-primary/10 border-primary/20', title: 'Performance Optimization', desc: 'Maximize efficiency across all critical facility systems' },
              { icon: ShieldCheck, color: 'text-success', bg: 'bg-success/10 border-success/20', title: 'Full Compliance', desc: 'Master OSHA, EPA, FDA, ASME, and state regulations' },
              { icon: Award, color: 'text-yellow-400', bg: 'bg-yellow-400/10 border-yellow-400/20', title: 'Leadership Excellence', desc: 'Develop decision-making skills for critical operations' },
            ].map(({ icon: Icon, color, bg, title, desc }) => (
              <div key={title} className={`rounded-xl p-6 border ${bg} hover:scale-[1.02] transition-transform`}>
                <Icon className={`w-9 h-9 mx-auto mb-3 ${color}`} />
                <h3 className="text-sm font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button size="lg" onClick={onGetStarted} className="text-base px-8 py-6">
              <Zap className="w-5 h-5 mr-2" />
              {isReadOnly ? 'View Training' : 'Begin Training'}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" onClick={onViewCurriculum} className="text-base px-8 py-6 border-primary/30">
              View Curriculum
            </Button>
          </div>
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-10 border-t border-border/40">
            {[{ value: '10+', label: 'Modules' }, { value: '~12hrs', label: 'Total Duration' }, { value: '8+', label: 'Standards Covered' }].map(({ value, label }) => (
              <div key={label}>
                <div className="text-3xl font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
