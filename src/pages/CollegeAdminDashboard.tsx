import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Building,
  TrendingUp, 
  Users, 
  BarChart3,
  ArrowLeft,
  Download,
  Globe,
  Recycle,
  Award,
  AlertTriangle,
  CheckCircle,
  Clock
} from "lucide-react";
import AIInsightCard from "@/components/AIInsightCard";

const CollegeAdminDashboard = () => {
  const collegeOverview = {
    totalCanteens: 4,
    totalStudents: 8450,
    facultyCount: 645,
    dailyMeals: 18500,
    wasteReduction: "67%",
    carbonSaved: "2.4 tons"
  };

  const canteenData = [
    { 
      id: 1, 
      name: "Main Canteen (Block A)", 
      capacity: 800, 
      currentLoad: 756, 
      status: "optimal",
      wasteToday: "12.5kg",
      efficiency: 94
    },
    { 
      id: 2, 
      name: "Engineering Block Canteen", 
      capacity: 600, 
      currentLoad: 620, 
      status: "overloaded",
      wasteToday: "18.2kg",
      efficiency: 87
    },
    { 
      id: 3, 
      name: "Hostel Canteen North", 
      capacity: 900, 
      currentLoad: 680, 
      status: "underutilized",
      wasteToday: "8.7kg",
      efficiency: 96
    },
    { 
      id: 4, 
      name: "Faculty Club Restaurant", 
      capacity: 200, 
      currentLoad: 145, 
      status: "optimal",
      wasteToday: "4.1kg",
      efficiency: 92
    }
  ];

  const sustainabilityMetrics = {
    composting: {
      daily: "145kg",
      weekly: "1.2 tons",
      partners: 3
    },
    biofuel: {
      oilCollected: "85L",
      conversion: "78L biofuel",
      vendors: 2
    },
    recycling: {
      packaging: "89%",
      organicWaste: "94%",
      partnerships: 5
    }
  };

  const aiRecommendations = [
    {
      type: "optimization" as const,
      title: "Load Balancing Opportunity",
      content: "Engineering Block is 103% capacity while Hostel North is at 76%. Suggest lunch time staggering or cross-referral system.",
      confidence: 92,
      impact: "Reduce wait times by 40%"
    },
    {
      type: "sustainability" as const,
      title: "Composting Expansion",
      content: "Current compost production can support 3 additional campus garden projects. Partner with Horticulture department.",
      confidence: 89,
      impact: "100% organic waste utilization"
    },
    {
      type: "prediction" as const,
      title: "Festival Season Forecast",
      content: "Diwali week shows 23% higher attendance. Pre-order raw materials and extend service hours for Canteen 1 & 3.",
      confidence: 96,
      impact: "Prevent 45kg waste during peak"
    }
  ];

  const monthlyReport = {
    totalMeals: 547000,
    wasteReduced: "1.8 tons",
    co2Saved: "4.2 tons",
    waterSaved: "12,400L",
    costSavings: "₹2,45,000"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-accent/20">
      {/* Header */}
      <header className="bg-white border-b border-border/10 shadow-card">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="sm" onClick={() => window.history.back()}>
                <ArrowLeft className="w-4 h-4" />
              </Button>
              <div>
                <h1 className="text-xl font-bold text-foreground">College Administration</h1>
                <p className="text-sm text-muted-foreground">Multi-canteen sustainability oversight</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Export Report
              </Button>
              <Badge variant="secondary" className="bg-gradient-primary text-primary-foreground">
                <Building className="w-3 h-3 mr-1" />
                {collegeOverview.totalCanteens} Canteens
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">College Overview</TabsTrigger>
            <TabsTrigger value="canteens">Canteen Management</TabsTrigger>
            <TabsTrigger value="sustainability">Sustainability Hub</TabsTrigger>
            <TabsTrigger value="reports">Impact Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* College Stats */}
            <div className="grid md:grid-cols-6 gap-4">
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <Building className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{collegeOverview.totalCanteens}</div>
                  <div className="text-xs text-muted-foreground">Canteens</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-info" />
                  <div className="text-2xl font-bold text-foreground">{collegeOverview.totalStudents.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Students</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <Users className="w-6 h-6 mx-auto mb-2 text-warning" />
                  <div className="text-2xl font-bold text-foreground">{collegeOverview.facultyCount}</div>
                  <div className="text-xs text-muted-foreground">Faculty</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <BarChart3 className="w-6 h-6 mx-auto mb-2 text-success" />
                  <div className="text-2xl font-bold text-foreground">{collegeOverview.dailyMeals.toLocaleString()}</div>
                  <div className="text-xs text-muted-foreground">Daily Meals</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <Recycle className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <div className="text-2xl font-bold text-foreground">{collegeOverview.wasteReduction}</div>
                  <div className="text-xs text-muted-foreground">Waste Reduced</div>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-card">
                <CardContent className="p-4 text-center">
                  <Globe className="w-6 h-6 mx-auto mb-2 text-success" />
                  <div className="text-2xl font-bold text-foreground">{collegeOverview.carbonSaved}</div>
                  <div className="text-xs text-muted-foreground">CO₂ Saved</div>
                </CardContent>
              </Card>
            </div>

            {/* AI Recommendations */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-foreground">Strategic AI Insights</h3>
              {aiRecommendations.map((insight, index) => (
                <AIInsightCard key={index} {...insight} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="canteens" className="space-y-6">
            {/* Canteen Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {canteenData.map((canteen) => (
                <Card key={canteen.id} className="border-0 shadow-elegant">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{canteen.name}</CardTitle>
                      <Badge variant={
                        canteen.status === "optimal" ? "default" :
                        canteen.status === "overloaded" ? "destructive" : "secondary"
                      } className={
                        canteen.status === "optimal" ? "bg-success text-success-foreground" :
                        canteen.status === "overloaded" ? "" : "bg-warning text-warning-foreground"
                      }>
                        {canteen.status === "optimal" ? <CheckCircle className="w-3 h-3 mr-1" /> :
                         canteen.status === "overloaded" ? <AlertTriangle className="w-3 h-3 mr-1" /> :
                         <Clock className="w-3 h-3 mr-1" />}
                        {canteen.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground">Current Load</div>
                        <div className="text-2xl font-bold text-foreground">
                          {canteen.currentLoad}/{canteen.capacity}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {Math.round((canteen.currentLoad / canteen.capacity) * 100)}% capacity
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">Efficiency</div>
                        <div className="text-2xl font-bold text-foreground">{canteen.efficiency}%</div>
                        <div className="text-xs text-muted-foreground">Overall score</div>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t border-border/10">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Today's waste:</span>
                        <Badge variant="outline" className="text-xs">
                          {canteen.wasteToday}
                        </Badge>
                      </div>
                    </div>

                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          canteen.status === "optimal" ? "bg-success" :
                          canteen.status === "overloaded" ? "bg-destructive" : "bg-warning"
                        }`}
                        style={{ width: `${Math.min((canteen.currentLoad / canteen.capacity) * 100, 100)}%` }}
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load Balancing Suggestion */}
            <Card className="border-0 shadow-elegant bg-gradient-to-r from-primary/10 to-warning/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  AI Load Balancing Recommendation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Current imbalance detected: Engineering Block (103% capacity) vs Hostel North (76% capacity)
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-white/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Suggested Actions:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Stagger Engineering lunch time: 12:00-1:00 PM → 12:15-1:45 PM</li>
                        <li>• Display live capacity on digital boards</li>
                        <li>• Offer 5% discount at Hostel North during peak hours</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-white/50 rounded-lg">
                      <h4 className="font-semibold text-foreground mb-2">Expected Impact:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• 40% reduction in wait times</li>
                        <li>• 15% better resource utilization</li>
                        <li>• Improved student satisfaction</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="sustainability" className="space-y-6">
            {/* Sustainability Overview */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-0 shadow-elegant bg-gradient-to-br from-success/10 to-success/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Recycle className="w-5 h-5 text-success" />
                    Composting Program
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Daily Production</span>
                    <span className="font-medium">{sustainabilityMetrics.composting.daily}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Weekly Total</span>
                    <span className="font-medium">{sustainabilityMetrics.composting.weekly}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Active Partners</span>
                    <Badge variant="outline">{sustainabilityMetrics.composting.partners} partners</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant bg-gradient-to-br from-warning/10 to-warning/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-warning" />
                    Biofuel Initiative
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Oil Collected</span>
                    <span className="font-medium">{sustainabilityMetrics.biofuel.oilCollected}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Biofuel Produced</span>
                    <span className="font-medium">{sustainabilityMetrics.biofuel.conversion}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Vendor Partners</span>
                    <Badge variant="outline">{sustainabilityMetrics.biofuel.vendors} vendors</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-elegant bg-gradient-to-br from-info/10 to-info/5">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-info" />
                    Recycling Network
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Packaging</span>
                    <span className="font-medium">{sustainabilityMetrics.recycling.packaging} recycled</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Organic Waste</span>
                    <span className="font-medium">{sustainabilityMetrics.recycling.organicWaste} processed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Partnerships</span>
                    <Badge variant="outline">{sustainabilityMetrics.recycling.partnerships} active</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Waste Stream Visualization */}
            <Card className="border-0 shadow-elegant">
              <CardHeader>
                <CardTitle>Campus Waste Flow Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { source: "Canteen 1", veg: "35kg", oil: "12L", packaging: "8kg" },
                    { source: "Canteen 2", veg: "28kg", oil: "9L", packaging: "6kg" },
                    { source: "Canteen 3", veg: "42kg", oil: "15L", packaging: "10kg" },
                    { source: "Faculty Club", veg: "18kg", oil: "6L", packaging: "4kg" }
                  ].map((stream, index) => (
                    <div key={index} className="p-4 bg-muted/30 rounded-xl">
                      <h4 className="font-semibold text-foreground mb-3">{stream.source}</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Veg peels:</span>
                          <span className="text-success font-medium">{stream.veg} → Compost</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Used oil:</span>
                          <span className="text-warning font-medium">{stream.oil} → Biofuel</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Packaging:</span>
                          <span className="text-info font-medium">{stream.packaging} → Recycle</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            {/* Monthly Impact Report */}
            <Card className="border-0 shadow-elegant bg-gradient-primary text-primary-foreground">
              <CardHeader>
                <CardTitle className="text-white">Monthly Sustainability Impact Report</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">{monthlyReport.totalMeals.toLocaleString()}</div>
                    <div className="text-xs text-white/80">Total Meals Served</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">{monthlyReport.wasteReduced}</div>
                    <div className="text-xs text-white/80">Waste Reduced</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">{monthlyReport.co2Saved}</div>
                    <div className="text-xs text-white/80">CO₂ Emissions Saved</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">{monthlyReport.waterSaved}</div>
                    <div className="text-xs text-white/80">Water Conserved</div>
                  </div>
                  <div className="text-center p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <div className="text-2xl font-bold text-white">{monthlyReport.costSavings}</div>
                    <div className="text-xs text-white/80">Cost Savings</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Detailed Analytics */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Environmental Certificates</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                    <Award className="w-8 h-8 text-success" />
                    <div>
                      <h4 className="font-semibold text-foreground">Green Campus Certification</h4>
                      <p className="text-sm text-muted-foreground">Achieved 85% waste reduction target</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                    <Globe className="w-8 h-8 text-primary" />
                    <div>
                      <h4 className="font-semibold text-foreground">Carbon Neutral Initiative</h4>
                      <p className="text-sm text-muted-foreground">On track for 2025 carbon neutrality</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-warning/10 rounded-lg">
                    <Recycle className="w-8 h-8 text-warning" />
                    <div>
                      <h4 className="font-semibold text-foreground">Zero Waste to Landfill</h4>
                      <p className="text-sm text-muted-foreground">94% waste diversion achieved</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-card">
                <CardHeader>
                  <CardTitle>Stakeholder Impact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground">Students</h4>
                    <p className="text-sm text-muted-foreground">89% participate in meal planning • 12% increase in environmental awareness</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground">Faculty</h4>
                    <p className="text-sm text-muted-foreground">87% adoption rate • Leading by example initiative successful</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground">Local NGOs</h4>
                    <p className="text-sm text-muted-foreground">12 partner organizations • 2,400 meals redistributed monthly</p>
                  </div>
                  <div className="p-3 bg-muted/30 rounded-lg">
                    <h4 className="font-semibold text-foreground">Community</h4>
                    <p className="text-sm text-muted-foreground">Local farmers benefit from 1.2 tons compost monthly</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default CollegeAdminDashboard;