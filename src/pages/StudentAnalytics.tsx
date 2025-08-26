import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, TrendingUp, Calendar, Leaf, Target, Award, Share } from "lucide-react";
import GamificationWidget from "@/components/GameificationWidget";

const StudentAnalytics = () => {
  const monthlyData = {
    mealsPlanned: 89,
    mealsAttended: 84,
    wastePreventedKg: "18.5kg",
    co2Saved: "42kg",
    waterSaved: "156L",
    streak: 12,
    level: 8,
    points: 2340,
    nextLevelPoints: 2500
  };

  const weeklyTrends = [
    { day: "Mon", planned: 3, attended: 3 },
    { day: "Tue", planned: 3, attended: 2 },
    { day: "Wed", planned: 2, attended: 2 },
    { day: "Thu", planned: 3, attended: 3 },
    { day: "Fri", planned: 3, attended: 3 },
    { day: "Sat", planned: 2, attended: 1 },
    { day: "Sun", planned: 2, attended: 2 }
  ];

  const achievements = [
    "Eco Warrior",
    "Week Champion", 
    "Waste Saver",
    "Green Guardian",
    "Sustainability Star"
  ];

  const impactComparison = {
    treesPlanted: "3.2 trees equivalent",
    carbonOffset: "Equal to 180km less driving",
    waterSaved: "2 weeks of drinking water"
  };

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
                <h1 className="text-xl font-bold text-foreground">Your Impact Analytics</h1>
                <p className="text-sm text-muted-foreground">Track your sustainability journey</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              <Share className="w-4 h-4 mr-2" />
              Share Impact
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Gamification Widget */}
        <GamificationWidget 
          streak={monthlyData.streak}
          level={monthlyData.level}
          points={monthlyData.points}
          nextLevelPoints={monthlyData.nextLevelPoints}
          achievements={achievements}
          rank="Top 10%"
        />

        {/* Monthly Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="border-0 shadow-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary" />
                This Month's Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">{monthlyData.mealsPlanned}</div>
                  <div className="text-xs text-muted-foreground">Meals Planned</div>
                </div>
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-success">{monthlyData.mealsAttended}</div>
                  <div className="text-xs text-muted-foreground">Meals Attended</div>
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-foreground">
                  {Math.round((monthlyData.mealsAttended / monthlyData.mealsPlanned) * 100)}% Accuracy
                </div>
                <div className="text-sm text-muted-foreground">Planning vs Attendance</div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-elegant bg-gradient-to-br from-success/10 to-success/5">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Leaf className="w-5 h-5 text-success" />
                Environmental Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Food Waste Prevented</span>
                <span className="font-bold text-foreground">{monthlyData.wastePreventedKg}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">CO₂ Emissions Saved</span>
                <span className="font-bold text-foreground">{monthlyData.co2Saved}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-muted-foreground">Water Conserved</span>
                <span className="font-bold text-foreground">{monthlyData.waterSaved}</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Weekly Trends */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Weekly Planning Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-7 gap-2">
              {weeklyTrends.map((day) => (
                <div key={day.day} className="text-center">
                  <div className="text-xs text-muted-foreground mb-2">{day.day}</div>
                  <div className="space-y-1">
                    <div className="h-8 bg-primary/20 rounded flex items-end justify-center">
                      <div 
                        className="bg-primary rounded-b w-full"
                        style={{ height: `${(day.planned / 3) * 100}%` }}
                      ></div>
                    </div>
                    <div className="h-8 bg-success/20 rounded flex items-end justify-center">
                      <div 
                        className="bg-success rounded-b w-full"
                        style={{ height: `${(day.attended / 3) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {day.planned}/{day.attended}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-4 mt-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-primary rounded"></div>
                <span>Planned</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-success rounded"></div>
                <span>Attended</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Impact Comparison */}
        <Card className="border-0 shadow-elegant bg-gradient-primary text-primary-foreground">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-white">
              <Target className="w-5 h-5" />
              Your Impact in Perspective
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-lg font-bold text-white">{impactComparison.treesPlanted}</div>
                <div className="text-xs text-white/80">Environmental Impact</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-lg font-bold text-white">{impactComparison.carbonOffset}</div>
                <div className="text-xs text-white/80">Carbon Footprint</div>
              </div>
              <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                <div className="text-lg font-bold text-white">{impactComparison.waterSaved}</div>
                <div className="text-xs text-white/80">Water Conservation</div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-white/90 text-sm">
                Your conscious meal planning has made a real difference! Keep up the great work.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Achievements Grid */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5 text-warning" />
              Your Achievements
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-xl text-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground">{achievement}</h4>
                  <p className="text-xs text-muted-foreground mt-1">Unlocked this month</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default StudentAnalytics;