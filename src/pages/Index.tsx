import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Users, Utensils, Heart, ArrowRight, Leaf, Target, Recycle } from "lucide-react";

const Index = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      id: "student",
      title: "Student",
      description: "Reserve your meals and help prevent food waste",
      icon: Users,
      color: "bg-gradient-primary",
      features: ["Quick meal RSVP", "AI menu insights", "Impact tracking", "Streak rewards"]
    },
    {
      id: "admin",
      title: "Mess Admin",
      description: "Monitor headcount and manage surplus food",
      icon: Utensils,
      color: "bg-gradient-eco",
      features: ["AI predictions", "Surplus reporting", "Waste tracking", "Optimization insights"]
    },
    {
      id: "charity",
      title: "Charity/NGO",
      description: "Collect surplus food and help the community",
      icon: Heart,
      color: "bg-warning",
      features: ["AI-prioritized alerts", "Smart routing", "Impact reports", "QR validation"]
    },
    {
      id: "teacher",
      title: "Faculty",
      description: "Faculty meal planning and department insights",
      icon: Target,
      color: "bg-info",
      features: ["Faculty RSVP", "Department analytics", "Leading by example", "Sustainability metrics"]
    },
    {
      id: "dayscholar",
      title: "Day Scholar",
      description: "Plan meals for your campus days",
      icon: Recycle,
      color: "bg-success",
      features: ["Campus day planning", "Travel optimization", "Schedule integration", "Area-wise insights"]
    },
    {
      id: "college-admin",
      title: "College Admin",
      description: "Multi-canteen sustainability oversight",
      icon: Users,
      color: "bg-gradient-primary",
      features: ["Multi-canteen view", "AI load balancing", "Sustainability hub", "Impact reporting"]
    }
  ];

  const handleRoleSelect = (roleId: string) => {
    setSelectedRole(roleId);
    // This will be replaced with proper routing when we add the dashboard pages
    window.location.href = `/${roleId}`;
  };

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header */}
      <header className="relative z-10 px-4 py-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-glow">
              <Leaf className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold text-white">Campus Plate Forward</h1>
          </div>
          <p className="text-white/80 text-sm max-w-md">
            Preventing food waste through smart meal planning and efficient redistribution
          </p>
        </div>
      </header>

      {/* Hero Stats */}
      <section className="px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">85%</div>
              <div className="text-white/80 text-xs">Waste Reduction</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Recycle className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">2.4K</div>
              <div className="text-white/80 text-xs">Meals Redistributed</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl font-bold text-white">12</div>
              <div className="text-white/80 text-xs">Partner NGOs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection */}
      <main className="px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-3">Choose Your Role</h2>
            <p className="text-white/80">Select your role to access the appropriate dashboard</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <Card 
                  key={role.id} 
                  className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-elegant border-0 bg-white/95 backdrop-blur-sm"
                  onClick={() => handleRoleSelect(role.id)}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className={`w-16 h-16 ${role.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{role.title}</h3>
                      <p className="text-muted-foreground text-sm">{role.description}</p>
                    </div>

                    <div className="space-y-2 mb-6">
                      {role.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button 
                      className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300 group-hover:shadow-glow"
                      size="lg"
                    >
                      Access Dashboard
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Badge variant="secondary" className="mb-4 px-4 py-2">
              Join the Food Waste Revolution
            </Badge>
            <p className="text-white/80 text-sm max-w-2xl mx-auto">
              Every meal planned is a step towards zero waste. Every surplus redistributed is a meal for someone in need. 
              Together, we can transform campus dining into a sustainable, community-focused ecosystem.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;