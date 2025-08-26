import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import ChatBot from "@/components/ChatBot";
import { 
  Users, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle,
  Clock,
  ArrowLeft,
  QrCode,
  Plus,
  CheckCircle,
  Package,
  Bot
} from "lucide-react";

const AdminDashboard = () => {
  const [showSurplusForm, setShowSurplusForm] = useState(false);
  const [surplusData, setSurplusData] = useState({
    meal: "lunch",
    items: "",
    quantity: "",
    pickupBy: ""
  });

  const currentMeal = "lunch";
  const headcounts = {
    breakfast: { expected: 756, average: 780, trend: "down" },
    lunch: { expected: 892, average: 850, trend: "up" },
    dinner: { expected: 934, average: 920, trend: "up" }
  };

  const recentSurplus = [
    { id: 1, meal: "Breakfast", items: "Poha, Upma", quantity: "20 servings", status: "picked-up", charity: "Hope Foundation" },
    { id: 2, meal: "Dinner", items: "Rice, Dal", quantity: "35 servings", status: "pending", charity: "Pending" },
    { id: 3, meal: "Lunch", items: "Mixed Veg", quantity: "15 servings", status: "picked-up", charity: "Care Society" }
  ];

  const handleSurplusSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle surplus submission
    setShowSurplusForm(false);
    setSurplusData({ meal: "lunch", items: "", quantity: "", pickupBy: "" });
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
                <h1 className="text-xl font-bold text-foreground">Mess Admin Dashboard</h1>
                <p className="text-sm text-muted-foreground">Monitor headcount and manage surplus</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.location.href = '/admin/analytics'}
              >
                <Users className="w-4 h-4 mr-2" />
                Analytics
              </Button>
              <Button variant="outline" size="sm">
                <QrCode className="w-4 h-4 mr-2" />
                QR Code
              </Button>
              <Badge variant="secondary" className="bg-success text-success-foreground">
                <Clock className="w-3 h-3 mr-1" />
                {currentMeal.toUpperCase()} Service
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6 space-y-6">
        {/* Live Headcount */}
        <div className="grid md:grid-cols-3 gap-6">
          {Object.entries(headcounts).map(([meal, data]) => (
            <Card key={meal} className={`border-0 shadow-elegant ${
              meal === currentMeal ? 'bg-gradient-primary text-primary-foreground' : 'bg-white'
            }`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold capitalize">{meal}</h3>
                  <div className={`flex items-center gap-1 ${
                    meal === currentMeal ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    {data.trend === "up" ? (
                      <TrendingUp className="w-4 h-4 text-success" />
                    ) : (
                      <TrendingDown className="w-4 h-4 text-warning" />
                    )}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">{data.expected}</div>
                  <div className={`text-sm ${
                    meal === currentMeal ? 'text-white/80' : 'text-muted-foreground'
                  }`}>
                    Expected Students
                  </div>
                  <div className={`text-xs mt-2 ${
                    meal === currentMeal ? 'text-white/60' : 'text-muted-foreground'
                  }`}>
                    Avg: {data.average} ({data.trend === "up" ? "+" : ""}{data.expected - data.average})
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* AI Generation Section */}
        <Card className="border-0 shadow-elegant bg-gradient-to-br from-primary/5 to-primary/10">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-xl">
              <Bot className="w-5 h-5 text-primary" />
              AI Assistant
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="h-[400px]">
                <ChatBot embedded={true} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button 
            onClick={() => setShowSurplusForm(true)}
            className="bg-warning hover:bg-warning/90 text-warning-foreground"
            size="lg"
          >
            <Plus className="w-4 h-4 mr-2" />
            Report Surplus Food
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.location.href = '/admin/analytics'}
          >
            <Users className="w-4 h-4 mr-2" />
            View Full Analytics
          </Button>
        </div>

        {/* Surplus Reporting Form */}
        {showSurplusForm && (
          <Card className="border-0 shadow-elegant bg-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                Report Surplus Food
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSurplusSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="meal">Meal Type</Label>
                    <select
                      id="meal"
                      value={surplusData.meal}
                      onChange={(e) => setSurplusData(prev => ({ ...prev, meal: e.target.value }))}
                      className="w-full mt-1 px-3 py-2 border border-border rounded-md bg-background"
                    >
                      <option value="breakfast">Breakfast</option>
                      <option value="lunch">Lunch</option>
                      <option value="dinner">Dinner</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="quantity">Approximate Quantity</Label>
                    <Input
                      id="quantity"
                      placeholder="e.g., Feeds 20-30 people"
                      value={surplusData.quantity}
                      onChange={(e) => setSurplusData(prev => ({ ...prev, quantity: e.target.value }))}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="items">Food Items</Label>
                  <Textarea
                    id="items"
                    placeholder="e.g., Rice, Dal Tadka, Mixed Vegetables"
                    value={surplusData.items}
                    onChange={(e) => setSurplusData(prev => ({ ...prev, items: e.target.value }))}
                  />
                </div>
                <div>
                  <Label htmlFor="pickupBy">Pickup By</Label>
                  <Input
                    id="pickupBy"
                    type="time"
                    value={surplusData.pickupBy}
                    onChange={(e) => setSurplusData(prev => ({ ...prev, pickupBy: e.target.value }))}
                  />
                </div>
                <div className="flex gap-2">
                  <Button type="submit" className="bg-gradient-primary">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Submit Report
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline"
                    onClick={() => setShowSurplusForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        )}

        {/* Recent Surplus Reports */}
        <Card className="border-0 shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-primary" />
              Recent Surplus Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentSurplus.map((report) => (
                <div key={report.id} className="flex items-center justify-between p-4 bg-muted/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${
                      report.status === "picked-up" ? "bg-success" : "bg-warning"
                    }`}></div>
                    <div>
                      <h4 className="font-semibold text-foreground">{report.meal}</h4>
                      <p className="text-sm text-muted-foreground">{report.items}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-foreground">{report.quantity}</div>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      {report.status === "picked-up" ? (
                        <>
                          <CheckCircle className="w-3 h-3 text-success" />
                          {report.charity}
                        </>
                      ) : (
                        <>
                          <Clock className="w-3 h-3 text-warning" />
                          Awaiting pickup
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">89%</div>
              <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-success">156</div>
              <div className="text-sm text-muted-foreground">Surplus Reports</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-warning">2.1K</div>
              <div className="text-sm text-muted-foreground">Meals Redistributed</div>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-card">
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-info">12</div>
              <div className="text-sm text-muted-foreground">Active Partners</div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;