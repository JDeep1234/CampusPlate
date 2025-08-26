import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Utensils, 
  Coffee, 
  Sun, 
  Moon, 
  Calendar, 
  Flame, 
  Clock,
  ArrowLeft,
  Trophy,
  Target,
  Leaf,
  Brain,
  BarChart3
} from "lucide-react";
import AIInsightCard from "@/components/AIInsightCard";

const StudentDashboard = () => {
  const [mealPlans, setMealPlans] = useState({
    breakfast: false,
    lunch: true,
    dinner: true
  });

  const toggleMeal = (meal: keyof typeof mealPlans) => {
    setMealPlans(prev => ({
      ...prev,
      [meal]: !prev[meal]
    }));
  };

  const todaysMenu = [
    { meal: "Breakfast", items: ["Poha", "Upma", "Tea/Coffee", "Fruits"], time: "7:30 - 9:30 AM" },
    { meal: "Lunch", items: ["Rice", "Dal Tadka", "Mixed Veg", "Chapati", "Pickle"], time: "12:00 - 2:30 PM" },
    { meal: "Dinner", items: ["Jeera Rice", "Paneer Curry", "Aloo Gobi", "Roti", "Raita"], time: "7:00 - 9:30 PM" }
  ];

  const streak = 7;
  const mealsPlanned = 21;
  const wastePrevented = "12.5kg";

  const aiInsights = [
    {
      type: "nutrition" as const,
      title: "Tomorrow's Dinner Analysis",
      content: "High protein content with paneer curry - perfect for post-workout recovery. Consider attending if you have evening gym sessions.",
      confidence: 94
    },
    {
      type: "sustainability" as const,
      title: "Your Weekly Impact",
      content: "Your consistent meal planning helped prevent 3.2kg food waste this week, equivalent to saving 25L water and planting 0.5 trees.",
      impact: "3.2kg waste prevented"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <header className="bg-white border-b border-border/10 shadow-card">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-xl font-bold text-foreground">Student Dashboard</h1>
                <p className="text-sm text-muted-foreground">Plan your meals for tomorrow</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/student/analytics'}
              >
                <BarChart3 className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                <Flame className="w-3 h-3 mr-1" />
                {streak} day streak
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* AI Insights */}
        <div className="space-y-4">
          {aiInsights.map((insight, index) => (
            <AIInsightCard key={index} {...insight} />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-gradient-primary text-primary-foreground border-0">
            <CardContent className="p-4 text-center">
              <Trophy className="w-6 h-6 mx-auto mb-2" />
              <div className="text-lg font-bold">{streak}</div>
              <div className="text-xs opacity-90">Day Streak</div>
            </CardContent>
          </Card>
          <Card className="bg-success text-success-foreground border-0">
            <CardContent className="p-4 text-center">
              <Target className="w-6 h-6 mx-auto mb-2" />
              <div className="text-lg font-bold">{mealsPlanned}</div>
              <div className="text-xs opacity-90">Meals Planned</div>
            </CardContent>
          </Card>
          <Card className="bg-warning text-warning-foreground border-0">
            <CardContent className="p-4 text-center">
              <Leaf className="w-6 h-6 mx-auto mb-2" />
              <div className="text-lg font-bold">{wastePrevented}</div>
              <div className="text-xs opacity-90">Waste Prevented</div>
            </CardContent>
          </Card>
        </div>

        {/* Meal Planning Card */}
        <Card className="bg-gradient-card border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Tomorrow's Meal Plan
              <Badge variant="outline" className="ml-auto">
                {new Date(Date.now() + 86400000).toLocaleDateString('en-US', { 
                  weekday: 'short', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { key: 'breakfast', label: 'Breakfast', icon: Coffee, time: '7:30 - 9:30 AM' },
              { key: 'lunch', label: 'Lunch', icon: Sun, time: '12:00 - 2:30 PM' },
              { key: 'dinner', label: 'Dinner', icon: Moon, time: '7:00 - 9:30 PM' }
            ].map(({ key, label, icon: Icon, time }) => (
              <div 
                key={key}
                className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                  mealPlans[key as keyof typeof mealPlans] 
                    ? 'border-primary bg-primary/5' 
                    : 'border-border bg-muted/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      mealPlans[key as keyof typeof mealPlans] 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{label}</h3>
                      <p className="text-sm text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {time}
                      </p>
                    </div>
                  </div>
                  <Switch 
                    checked={mealPlans[key as keyof typeof mealPlans]}
                    onCheckedChange={() => toggleMeal(key as keyof typeof mealPlans)}
                    className="data-[state=checked]:bg-primary"
                  />
                </div>
              </div>
            ))}
            
            <Button className="w-full bg-gradient-primary hover:opacity-90 transition-opacity duration-300 mt-6" size="lg">
              <Utensils className="w-4 h-4 mr-2" />
              Save Meal Plan
            </Button>
          </CardContent>
        </Card>

        {/* Tomorrow's Menu */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-primary" />
              Tomorrow's Menu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {todaysMenu.map((meal, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-foreground">{meal.meal}</h3>
                    <Badge variant="outline">{meal.time}</Badge>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {meal.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="secondary" className="text-xs">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Impact Summary */}
        <Card className="border-0 shadow-card bg-gradient-to-r from-primary/5 to-success/5">
          <CardContent className="p-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Great Work!</h3>
              <p className="text-muted-foreground text-sm">
                Your meal planning has helped prevent {wastePrevented} of food waste this month. 
                Keep up the great work and maintain your {streak}-day streak!
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StudentDashboard;