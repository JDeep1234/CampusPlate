import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Recycle, Droplets, TreePine, Plus, ArrowRight } from "lucide-react";

interface WasteItem {
  id: number;
  type: string;
  weight: string;
  disposalMethod: string;
  environmental_impact: string;
  status: "logged" | "processing" | "completed";
}

const WasteTracker = () => {
  const [showForm, setShowForm] = useState(false);
  const [wasteItems, setWasteItems] = useState<WasteItem[]>([
    {
      id: 1,
      type: "Vegetable peels",
      weight: "25 kg",
      disposalMethod: "Composting unit",
      environmental_impact: "15kg CO₂ saved, 200L water conserved",
      status: "completed"
    },
    {
      id: 2,
      type: "Used cooking oil",
      weight: "8 liters",
      disposalMethod: "Biofuel vendor",
      environmental_impact: "12kg CO₂ saved",
      status: "processing"
    },
    {
      id: 3,
      type: "Food scraps",
      weight: "18 kg",
      disposalMethod: "Animal feed",
      environmental_impact: "10kg CO₂ saved",
      status: "logged"
    }
  ]);

  const [newWaste, setNewWaste] = useState({
    type: "",
    weight: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // AI would suggest best disposal method here
    const aiSuggestedDisposal = newWaste.type.toLowerCase().includes("peel") ? "Composting unit" : 
                               newWaste.type.toLowerCase().includes("oil") ? "Biofuel vendor" : 
                               "Animal feed";
    
    const newItem: WasteItem = {
      id: Date.now(),
      type: newWaste.type,
      weight: newWaste.weight,
      disposalMethod: aiSuggestedDisposal,
      environmental_impact: "Impact calculation in progress...",
      status: "logged"
    };

    setWasteItems(prev => [newItem, ...prev]);
    setNewWaste({ type: "", weight: "", description: "" });
    setShowForm(false);
  };

  const totalImpact = {
    co2Saved: "47kg",
    waterSaved: "520L",
    wasteRecycled: "89%"
  };

  return (
    <div className="space-y-6">
      {/* Impact Summary */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="border-0 shadow-card bg-gradient-to-br from-success/10 to-success/5">
          <CardContent className="p-4 text-center">
            <Recycle className="w-8 h-8 mx-auto mb-3 text-success" />
            <div className="text-2xl font-bold text-foreground">{totalImpact.co2Saved}</div>
            <div className="text-sm text-muted-foreground">CO₂ Saved</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card bg-gradient-to-br from-info/10 to-info/5">
          <CardContent className="p-4 text-center">
            <Droplets className="w-8 h-8 mx-auto mb-3 text-info" />
            <div className="text-2xl font-bold text-foreground">{totalImpact.waterSaved}</div>
            <div className="text-sm text-muted-foreground">Water Conserved</div>
          </CardContent>
        </Card>
        <Card className="border-0 shadow-card bg-gradient-to-br from-primary/10 to-primary/5">
          <CardContent className="p-4 text-center">
            <TreePine className="w-8 h-8 mx-auto mb-3 text-primary" />
            <div className="text-2xl font-bold text-foreground">{totalImpact.wasteRecycled}</div>
            <div className="text-sm text-muted-foreground">Waste Recycled</div>
          </CardContent>
        </Card>
      </div>

      {/* Add New Waste */}
      <Card className="border-0 shadow-elegant">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-primary" />
              Kitchen Waste Tracker
            </CardTitle>
            <Button 
              onClick={() => setShowForm(!showForm)}
              size="sm"
              className="bg-gradient-primary"
            >
              <Plus className="w-4 h-4 mr-2" />
              Log Waste
            </Button>
          </div>
        </CardHeader>
        
        {showForm && (
          <CardContent className="border-t border-border/10">
            <form onSubmit={handleSubmit} className="space-y-4 pt-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="wasteType">Waste Type</Label>
                  <Input
                    id="wasteType"
                    placeholder="e.g., Vegetable peels, Used oil"
                    value={newWaste.type}
                    onChange={(e) => setNewWaste(prev => ({ ...prev, type: e.target.value }))}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="weight">Weight/Quantity</Label>
                  <Input
                    id="weight"
                    placeholder="e.g., 15 kg, 5 liters"
                    value={newWaste.weight}
                    onChange={(e) => setNewWaste(prev => ({ ...prev, weight: e.target.value }))}
                    required
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="description">Additional Details</Label>
                <Textarea
                  id="description"
                  placeholder="Any additional information about the waste"
                  value={newWaste.description}
                  onChange={(e) => setNewWaste(prev => ({ ...prev, description: e.target.value }))}
                />
              </div>
              <div className="flex gap-2">
                <Button type="submit" className="bg-gradient-primary">
                  Log Waste Item
                </Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        )}
      </Card>

      {/* Waste Items List */}
      <Card className="border-0 shadow-card">
        <CardHeader>
          <CardTitle>Recent Waste Logs</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {wasteItems.map((item) => (
              <div key={item.id} className="p-4 bg-muted/30 rounded-xl">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-semibold text-foreground">{item.type}</h4>
                      <Badge 
                        variant={
                          item.status === "completed" ? "default" :
                          item.status === "processing" ? "secondary" : "outline"
                        }
                        className={
                          item.status === "completed" ? "bg-success text-success-foreground" : ""
                        }
                      >
                        {item.status}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">
                      <span className="font-medium">Weight:</span> {item.weight} • 
                      <span className="font-medium"> Disposal:</span> {item.disposalMethod}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-success">
                      <ArrowRight className="w-3 h-3" />
                      {item.environmental_impact}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WasteTracker;