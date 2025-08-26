import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Car,
  Coffee, 
  Sun, 
  Moon, 
  Clock,
  ArrowLeft,
  Calendar,
  MapPin,
  Utensils,
  TrendingUp
} from "lucide-react";

const DayScholarDashboard = () => {
  const [mealPlans, setMealPlans] = useState({
    breakfast: false,
    lunch: true,
    dinner: false
  });

  const toggleMeal = (meal: keyof typeof mealPlans) => {
    setMealPlans(prev => ({
      ...prev,
      [meal]: !prev[meal]
    }));
  };

  const dayScholarStats = {
    totalDayScholars: 450,
    dailyAttendees: 234,
    weeklyParticipation: 67,
    mealsSaved: 156
  };

  const travelTimes = [
    { area: "Electronic City", time: "45-60 min", distance: "25 km", students: 67 },
    { area: "Whitefield", time: "35-50 min", distance: "22 km", students: 45 },
    { area: "Koramangala", time: "30-40 min", distance: "18 km", students: 52 },
    { area: "Indiranagar", time: "25-35 min", distance: "15 km", students: 38 },
    { area: "JP Nagar", time: "40-55 min", distance: "20 km", students: 43 }
  ];

  const weeklySchedule = [
    { day: "Monday", classes: "9:00 AM - 4:00 PM", meals: ["lunch"], recommended: true },
    { day: "Tuesday", classes: "10:00 AM - 3:00 PM", meals: ["lunch"], recommended: true },
    { day: "Wednesday", classes: "8:30 AM - 5:00 PM", meals: ["breakfast", "lunch"], recommended: true },
    { day: "Thursday", classes: "9:30 AM - 2:30 PM", meals: ["lunch"], recommended: true },
    { day: "Friday", classes: "9:00 AM - 3:30 PM", meals: ["lunch"], recommended: true },
    { day: "Saturday", classes: "9:00 AM - 1:00 PM", meals: ["lunch"], recommended: false }
  ];

  const todaysMenu = {
    breakfast: { items: ["Idli", "Vada", "Sambar", "Chutney"], available: true },
    lunch: { items: ["Rice", "Dal", "Vegetable Curry", "Chapati", "Pickle"], available: true },
    dinner: { items: ["Fried Rice", "Manchurian", "Soup", "Ice Cream"], available: true }
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
                <h1 className="text-xl font-bold text-foreground">Day Scholar Dashboard</h1>
                <p className="text-sm text-muted-foreground">Plan meals for your campus days</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                <Car className="w-3 h-3 mr-1" />
                Day Scholar
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-6">
        {/* Day Scholar Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <Car className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">{dayScholarStats.totalDayScholars}</div>
              <div className="text-xs text-muted-foreground">Day Scholars</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card bg-primary/10">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-primary" />
              <div className="text-2xl font-bold text-foreground">98</div>
              <div className="text-xs text-muted-foreground">Activity Points</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <Utensils className="w-6 h-6 mx-auto mb-2 text-success" />
              <div className="text-2xl font-bold text-foreground">{dayScholarStats.dailyAttendees}</div>
              <div className="text-xs text-muted-foreground">Daily Attendees</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-warning" />
              <div className="text-2xl font-bold text-foreground">{dayScholarStats.weeklyParticipation}%</div>
              <div className="text-xs text-muted-foreground">Participation</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <Calendar className="w-6 h-6 mx-auto mb-2 text-info" />
              <div className="text-2xl font-bold text-foreground">{dayScholarStats.mealsSaved}</div>
              <div className="text-xs text-muted-foreground">Meals Saved</div>
            </CardContent>
          </Card>
        </div>

        {/* Tomorrow's Meal Plan */}
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
            <p className="text-sm text-muted-foreground">Only select meals for days you'll be on campus</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { key: 'breakfast', label: 'Breakfast', icon: Coffee, time: '8:00 - 9:30 AM', note: 'Early classes only' },
              { key: 'lunch', label: 'Lunch', icon: Sun, time: '12:30 - 2:00 PM', note: 'Most popular with day scholars' },
              { key: 'dinner', label: 'Evening Snacks', icon: Moon, time: '5:00 - 6:30 PM', note: 'Late classes or activities' }
            ].map(({ key, label, icon: Icon, time, note }) => (
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
                      <p className="text-xs text-muted-foreground/80 italic">{note}</p>
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
              <Calendar className="w-4 h-4 mr-2" />
              Confirm Day Scholar Plan
            </Button>
          </CardContent>
        </Card>

        {/* Travel Time Information */}
        <Card className="border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Popular Day Scholar Areas
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {travelTimes.map((area, index) => (
                <div key={index} className="p-4 bg-muted/30 rounded-xl">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-8 bg-gradient-primary rounded-full"></div>
                      <div>
                        <h4 className="font-semibold text-foreground">{area.area}</h4>
                        <p className="text-sm text-muted-foreground">
                          {area.distance} • {area.time} travel time
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">
                        {area.students} students
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Activity Points */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              Activity Points System
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Earn points by reducing food wastage and making sustainable choices as a day scholar.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border rounded-lg p-3">
                <h3 className="font-medium mb-2">How to Earn Points</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-xs font-medium">+5</span>
                    </div>
                    Pre-plan campus meals 24 hours in advance
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-xs font-medium">+8</span>
                    </div>
                    Finish your entire meal with zero waste
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-xs font-medium">+10</span>
                    </div>
                    Carpool with other day scholars
                  </li>
                </ul>
              </div>
              
              <div className="border rounded-lg p-3">
                <h3 className="font-medium mb-2">Redeem Points For</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-xs font-medium text-green-600">50</span>
                    </div>
                    Free meal voucher
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-xs font-medium text-green-600">100</span>
                    </div>
                    Campus store discount
                  </li>
                  <li className="flex items-start">
                    <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mr-2 mt-0.5">
                      <span className="text-xs font-medium text-green-600">200</span>
                    </div>
                    Priority parking spot for a week
                  </li>
                </ul>
              </div>
            </div>
            
            <Button className="w-full">View Your Activity History</Button>
          </CardContent>
        </Card>
        
        {/* Weekly Schedule */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Weekly Schedule
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklySchedule.map((schedule, index) => (
                <div key={index} className={`p-4 rounded-xl ${
                  schedule.recommended ? 'bg-success/5 border border-success/20' : 'bg-muted/30'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-foreground">{schedule.day}</h4>
                    <Badge variant={schedule.recommended ? "default" : "outline"} 
                           className={schedule.recommended ? "bg-success text-success-foreground" : ""}>
                      {schedule.recommended ? "Recommended" : "Optional"}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Classes: {schedule.classes}</span>
                    <div className="flex gap-1">
                      {schedule.meals.map((meal, mealIndex) => (
                        <Badge key={mealIndex} variant="secondary" className="text-xs">
                          {meal}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Today's Available Menu */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Utensils className="w-5 h-5 text-primary" />
              Today's Available Menu
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(todaysMenu).map(([meal, data]) => (
                <div key={meal} className={`p-4 rounded-xl ${
                  data.available ? 'bg-success/5 border border-success/20' : 'bg-muted/30'
                }`}>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-semibold text-foreground capitalize">{meal}</h4>
                    <Badge variant={data.available ? "default" : "outline"}
                           className={data.available ? "bg-success text-success-foreground" : ""}>
                      {data.available ? "Available" : "Unavailable"}
                    </Badge>
                  </div>
                  <div className="space-y-1">
                    {data.items.map((item, index) => (
                      <div key={index} className="text-sm text-muted-foreground">• {item}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DayScholarDashboard;