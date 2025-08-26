import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { 
  Heart, 
  MapPin, 
  Clock, 
  Truck,
  ArrowLeft,
  CheckCircle,
  AlertTriangle,
  Package,
  Users,
  Calendar,
  TrendingUp,
  RotateCw
} from "lucide-react";

const CharityDashboard = () => {
  const [alerts, setAlerts] = useState([
    {
      id: 1,
      college: "RVCE Campus",
      meal: "Lunch",
      items: ["Rice", "Dal Tadka", "Mixed Vegetables", "Chapati"],
      quantity: "Feeds 25-30 people",
      pickupBy: "4:00 PM",
      timeLeft: "2h 15m",
      status: "available",
      distance: "3.2 km"
    },
    {
      id: 2,
      college: "Engineering College A",
      meal: "Breakfast",
      items: ["Poha", "Upma", "Tea"],
      quantity: "Feeds 15-20 people",
      pickupBy: "11:00 AM",
      timeLeft: "45m",
      status: "urgent",
      distance: "1.8 km"
    },
    {
      id: 3,
      college: "Medical College B",
      meal: "Dinner",
      items: ["Jeera Rice", "Paneer Curry", "Roti"],
      quantity: "Feeds 35-40 people",
      pickupBy: "10:00 PM",
      timeLeft: "6h 30m",
      status: "available",
      distance: "5.1 km"
    }
  ]);

  const [acceptedPickups, setAcceptedPickups] = useState([
    {
      id: 4,
      college: "Tech University",
      meal: "Lunch",
      quantity: "Feeds 40 people",
      driver: "Ramesh Kumar",
      status: "en-route",
      eta: "15 minutes"
    }
  ]);

  const acceptAlert = (alertId: number) => {
    const alert = alerts.find(a => a.id === alertId);
    if (alert) {
      setAcceptedPickups(prev => [...prev, {
        id: alertId,
        college: alert.college,
        meal: alert.meal,
        quantity: alert.quantity,
        driver: "Auto-assigned",
        status: "dispatched",
        eta: "Calculating..."
      }]);
      setAlerts(prev => prev.filter(a => a.id !== alertId));
    }
  };

  const monthlyStats = {
    totalMeals: 1247,
    totalWeight: "842 kg",
    partneredColleges: 8,
    activeTrucks: 3
  };

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
                <h1 className="text-xl font-bold text-foreground">Charity Dashboard</h1>
                <p className="text-sm text-muted-foreground">Hope Foundation - Food Rescue Operations</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-success text-success-foreground">
                <Truck className="w-3 h-3 mr-1" />
                {monthlyStats.activeTrucks} Active Trucks
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Map Integration */}
        <Card className="border-0 shadow-elegant mb-6">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-primary" />
              Real-Time Food Donation Map
            </CardTitle>
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <RotateCw className="h-4 w-4" /> Refresh Map
            </Button>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-[400px] bg-slate-100 rounded-md overflow-hidden">
              <div className="absolute inset-0">
                <img 
                  src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/77.5946,12.9716,12,0/800x400?access_token=pk.eyJ1IjoiZGVtby1hY2NvdW50IiwiYSI6ImNrZHhjNHlxNTBhMXcyeG50aXpmbGJjeTEifQ.2D6bKCd3ovbf9mQJJSHJdw" 
                  alt="Real-time Food Donation Map" 
                  className="w-full h-full object-cover"
                />
                
                {/* Map Markers */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center animate-pulse">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs">
                    RVCE Campus
                  </div>
                </div>
                
                <div className="absolute top-[40%] left-[60%]">
                  <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs">
                    Engineering College A
                  </div>
                </div>
                
                <div className="absolute top-[60%] left-[30%]">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs">
                    Medical College B
                  </div>
                </div>
                
                {/* Truck icon */}
                <div className="absolute top-[45%] left-[45%]">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Truck className="w-5 h-5 text-blue-500" />
                  </div>
                </div>
                
                {/* Route lines */}
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                  <path 
                    d="M400,200 L450,225 L480,180" 
                    stroke="blue" 
                    strokeWidth="3" 
                    fill="none" 
                    strokeDasharray="5,5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              
              <div className="absolute top-4 left-4 bg-white p-2 rounded-md shadow-md z-[1000] text-xs">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-primary rounded-full"></div>
                  <span>Available Food</span>
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span>Urgent Pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span>Scheduled Pickup</span>
                </div>
              </div>
              
              <div className="absolute bottom-4 right-4 bg-white p-3 rounded-md shadow-md z-[1000]">
                <h4 className="text-sm font-medium mb-2">AI Route Optimization</h4>
                <Button size="sm" className="w-full">Optimize Routes</Button>
              </div>
              
              <div className="absolute top-4 right-4 bg-white p-2 rounded-md shadow-md z-[1000]">
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <RotateCw className="h-3 w-3" /> Refresh
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Monthly Impact Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-elegant bg-gradient-primary text-primary-foreground">
            <CardContent className="p-4 text-center">
              <Heart className="w-6 h-6 mx-auto mb-2" />
              <div className="text-2xl font-bold">{monthlyStats.totalMeals}</div>
              <div className="text-xs opacity-90">Meals Rescued</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <Package className="w-6 h-6 mx-auto mb-2 text-success" />
              <div className="text-2xl font-bold text-foreground">{monthlyStats.totalWeight}</div>
              <div className="text-xs text-muted-foreground">Food Weight</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <Users className="w-6 h-6 mx-auto mb-2 text-info" />
              <div className="text-2xl font-bold text-foreground">{monthlyStats.partneredColleges}</div>
              <div className="text-xs text-muted-foreground">Partner Colleges</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <TrendingUp className="w-6 h-6 mx-auto mb-2 text-warning" />
              <div className="text-2xl font-bold text-foreground">+23%</div>
              <div className="text-xs text-muted-foreground">Monthly Growth</div>
            </CardContent>
          </Card>
        </div>

        {/* Real-time Surplus Alerts */}
        <Card className="border-0 shadow-elegant">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-warning" />
              Live Surplus Alerts
              <Badge variant="secondary" className="ml-auto">
                {alerts.length} Available
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {alerts.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Package className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No surplus alerts at the moment</p>
                <p className="text-sm">New alerts will appear here in real-time</p>
              </div>
            ) : (
              alerts.map((alert) => (
                <div 
                  key={alert.id}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                    alert.status === "urgent" 
                      ? "border-warning bg-warning/5" 
                      : "border-border bg-muted/30"
                  }`}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{alert.college}</h3>
                        <Badge variant={alert.status === "urgent" ? "destructive" : "secondary"}>
                          {alert.meal}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {alert.distance}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          Pickup by {alert.pickupBy}
                        </span>
                        <span className={`font-medium ${
                          alert.status === "urgent" ? "text-warning" : "text-success"
                        }`}>
                          {alert.timeLeft} left
                        </span>
                      </div>
                    </div>
                    <Button 
                      onClick={() => acceptAlert(alert.id)}
                      className={`${
                        alert.status === "urgent" 
                          ? "bg-warning hover:bg-warning/90 text-warning-foreground" 
                          : "bg-gradient-primary hover:opacity-90"
                      } transition-all duration-300`}
                    >
                      <Truck className="w-4 h-4 mr-2" />
                      Accept & Dispatch
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-foreground">Items: </span>
                      <span className="text-sm text-muted-foreground">
                        {alert.items.join(", ")}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-foreground">Quantity: </span>
                      <span className="text-sm text-muted-foreground">{alert.quantity}</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Active Pickups */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-primary" />
              Active Pickups
              <Badge variant="outline" className="ml-auto">
                {acceptedPickups.length} In Progress
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {acceptedPickups.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Truck className="w-12 h-12 mx-auto mb-3 opacity-50" />
                <p>No active pickups</p>
                <p className="text-sm">Accepted alerts will appear here</p>
              </div>
            ) : (
              <div className="space-y-3">
                {acceptedPickups.map((pickup) => (
                  <div key={pickup.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        pickup.status === "en-route" ? "bg-warning animate-pulse" : "bg-success"
                      }`}></div>
                      <div>
                        <h4 className="font-semibold text-foreground">{pickup.college}</h4>
                        <p className="text-sm text-muted-foreground">
                          Driver: {pickup.driver} • {pickup.quantity}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge variant={pickup.status === "en-route" ? "secondary" : "outline"}>
                        {pickup.status}
                      </Badge>
                      <div className="text-xs text-muted-foreground mt-1">
                        ETA: {pickup.eta}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="border-0 shadow-card">
            <CardContent className="p-6 text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-lg font-bold text-foreground mb-2">Schedule Regular Pickup</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Set up recurring pickups with your partner colleges
              </p>
              <Button variant="outline">Schedule Pickup</Button>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-card">
            <CardContent className="p-6 text-center">
              <TrendingUp className="w-12 h-12 mx-auto mb-4 text-success" />
              <h3 className="text-lg font-bold text-foreground mb-2">Impact Report</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Generate monthly impact reports for stakeholders
              </p>
              <Button variant="outline">Generate Report</Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CharityDashboard;