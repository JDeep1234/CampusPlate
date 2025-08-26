import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, TrendingUp, Brain, BarChart3, Users, Clock, Download } from "lucide-react";
import AIInsightCard from "@/components/AIInsightCard";
import WasteTracker from "@/components/WasteTracker";

const AdminAnalytics = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("week");

  const performanceMetrics = {
    accuracy: 91,
    wasteReduction: 78,
    surplusReports: 45,
    partnerSatisfaction: 94
  };

  const predictionData = {
    breakfast: { predicted: 756, actual: 748, accuracy: 98.9 },
    lunch: { predicted: 892, actual: 905, accuracy: 98.5 },
    dinner: { predicted: 934, actual: 918, accuracy: 98.3 }
  };

  const aiInsights = [
    {
      type: "prediction" as const,
      title: "Peak Lunch Hour Identified",
      content: "Analysis shows 67% of students prefer lunch between 12:30-1:30 PM. Consider extending service hours during this window.",
      confidence: 94,
      impact: "Reduce wait times by 23%"
    },
    {
      type: "optimization" as const,
      title: "Batch Cooking Recommendation",
      content: "Cook 60% of rice initially, then prepare additional batches based on real-time consumption. This reduces waste by 15%.",
      confidence: 87,
      impact: "Save 12kg food daily"
    },
    {
      type: "sustainability" as const,
      title: "Composting Opportunity",
      content: "Your vegetable peels can produce 18kg of organic compost weekly. Partner with campus gardening club for mutual benefit.",
      confidence: 96,
      impact: "100% peel utilization"
    }
  ];

  const weeklyTrends = [
    { day: "Mon", predicted: 2580, actual: 2560, waste: 45 },
    { day: "Tue", predicted: 2420, actual: 2445, waste: 38 },
    { day: "Wed", predicted: 2380, actual: 2375, waste: 32 },
    { day: "Thu", predicted: 2610, actual: 2590, waste: 41 },
    { day: "Fri", predicted: 2550, actual: 2565, waste: 35 },
    { day: "Sat", predicted: 1850, actual: 1820, waste: 28 },
    { day: "Sun", predicted: 1890, actual: 1905, waste: 25 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <header className="bg-white border-b border-border/10 shadow-card">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-xl font-bold text-foreground">Admin Analytics & AI Insights</h1>
                <p className="text-sm text-muted-foreground">Data-driven mess management</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                <Brain className="w-3 h-3 mr-1" />
                AI Powered
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="predictions" className="flex items-center gap-2">
              <Brain className="w-4 h-4" />
              AI Predictions
            </TabsTrigger>
            <TabsTrigger value="sustainability" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Sustainability
            </TabsTrigger>
            <TabsTrigger value="optimization" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Optimization
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Performance Metrics */}
            <div className="grid md:grid-cols-4 gap-4">
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary">{performanceMetrics.accuracy}%</div>
                  <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-success">{performanceMetrics.wasteReduction}%</div>
                  <div className="text-sm text-muted-foreground">Waste Reduction</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-warning">{performanceMetrics.surplusReports}</div>
                  <div className="text-sm text-muted-foreground">Surplus Reports</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-info">{performanceMetrics.partnerSatisfaction}%</div>
                  <div className="text-sm text-muted-foreground">Partner Satisfaction</div>
                </CardContent>
              </Card>
            </div>

            {/* Weekly Trends Chart */}
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Weekly Attendance vs Prediction Trends
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyTrends.map((day) => (
                    <div key={day.day} className="grid grid-cols-4 gap-4 items-center">
                      <div className="font-medium text-foreground">{day.day}</div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Predicted: {day.predicted}</div>
                        <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${(day.predicted / 2700) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-xs text-muted-foreground">Actual: {day.actual}</div>
                        <div className="h-2 bg-success/20 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-success rounded-full"
                            style={{ width: `${(day.actual / 2700) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                      <div className="text-center">
                        <Badge variant={day.waste < 35 ? "default" : "secondary"} className={day.waste < 35 ? "bg-success text-success-foreground" : ""}>
                          {day.waste}kg waste
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="predictions" className="space-y-6">
            {/* Meal Prediction Accuracy */}
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(predictionData).map(([meal, data]) => (
                <Card key={meal} className="border-0 shadow-card">
                  <CardHeader>
                    <CardTitle className="capitalize">{meal}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Predicted</span>
                      <span className="font-medium">{data.predicted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Actual</span>
                      <span className="font-medium">{data.actual}</span>
                    </div>
                    <div className="text-center">
                      <Badge className="bg-gradient-primary text-primary-foreground">
                        {data.accuracy}% Accurate
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* AI Insights */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
                <Brain className="w-5 h-5 text-primary" />
                AI-Powered Insights
              </h3>
              {aiInsights.map((insight, index) => (
                <AIInsightCard key={index} {...insight} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="sustainability" className="space-y-6">
            <WasteTracker />
          </TabsContent>

          <TabsContent value="optimization" className="space-y-6">
            {/* Cooking Optimization Recommendations */}
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-primary" />
                  AI Cooking Optimization
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Today's Recommendations</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-primary/10 rounded-lg border border-primary/20">
                        <h5 className="font-medium text-foreground">Lunch Rice Preparation</h5>
                        <p className="text-sm text-muted-foreground">Start with 70% of planned quantity. Weather forecast shows rain, expect 8% higher attendance.</p>
                      </div>
                      <div className="p-3 bg-success/10 rounded-lg border border-success/20">
                        <h5 className="font-medium text-foreground">Vegetable Curry</h5>
                        <p className="text-sm text-muted-foreground">Popularity increased 15% this week. Consider preparing 10% extra portions.</p>
                      </div>
                      <div className="p-3 bg-warning/10 rounded-lg border border-warning/20">
                        <h5 className="font-medium text-foreground">Dal Preparation</h5>
                        <p className="text-sm text-muted-foreground">Consistent high demand. Maintain current portions but monitor salt levels based on feedback.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="font-semibold text-foreground">Historical Performance</h4>
                    <div className="space-y-2">
                      {[
                        { item: "Rice", waste: "2.3%", trend: "down", color: "success" },
                        { item: "Dal", waste: "1.8%", trend: "stable", color: "info" },
                        { item: "Vegetables", waste: "4.1%", trend: "up", color: "warning" },
                        { item: "Chapati", waste: "1.2%", trend: "down", color: "success" }
                      ].map((item) => (
                        <div key={item.item} className="flex items-center justify-between p-2 bg-muted/30 rounded">
                          <span className="text-sm font-medium">{item.item}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground">{item.waste} waste</span>
                            <Badge variant="outline" className={`text-${item.color}`}>
                              {item.trend}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Load Balancing Suggestions */}
            <Card className="border-0 shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Service Time Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Peak Hours Analysis</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">12:30 - 1:00 PM</span>
                        <Badge className="bg-warning text-warning-foreground">Peak</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">1:00 - 1:30 PM</span>
                        <Badge className="bg-info text-info-foreground">High</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">1:30 - 2:00 PM</span>
                        <Badge variant="outline">Moderate</Badge>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Suggested Improvements</h4>
                    <div className="space-y-2 text-sm">
                      <p className="text-muted-foreground">• Open additional serving counter during 12:30-1:00 PM</p>
                      <p className="text-muted-foreground">• Pre-plate popular items for faster service</p>
                      <p className="text-muted-foreground">• Consider express lane for single-item meals</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default AdminAnalytics;