import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BrainCircuit, TrendingUp, Utensils, Salad } from 'lucide-react';

const SmartMealAnalytics: React.FC = () => {
  // Sample data for charts
  const mealData = [
    { name: 'Monday', calories: 2400, protein: 24, carbs: 98, fat: 12 },
    { name: 'Tuesday', calories: 1800, protein: 28, carbs: 69, fat: 10 },
    { name: 'Wednesday', calories: 2200, protein: 30, carbs: 79, fat: 15 },
    { name: 'Thursday', calories: 2600, protein: 38, carbs: 90, fat: 20 },
    { name: 'Friday', calories: 2000, protein: 25, carbs: 72, fat: 14 },
    { name: 'Saturday', calories: 2100, protein: 31, carbs: 68, fat: 17 },
    { name: 'Sunday', calories: 1900, protein: 26, carbs: 65, fat: 13 },
  ];

  const nutritionData = [
    { name: 'Protein', value: 30 },
    { name: 'Carbs', value: 45 },
    { name: 'Fat', value: 25 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  const recommendations = [
    "Increase protein intake by 10% for better muscle recovery",
    "Reduce carbohydrate consumption in evening meals",
    "Add more leafy greens to your lunch options",
    "Consider intermittent fasting between 8pm-10am",
    "Drink at least 3 liters of water daily"
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-8">
        <BrainCircuit className="h-10 w-10 mr-4 text-primary" />
        <div>
          <h1 className="text-3xl font-bold">Smart Meal Analytics</h1>
          <p className="text-muted-foreground">AI-powered insights for optimal nutrition</p>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="nutrition">Nutrition Breakdown</TabsTrigger>
          <TabsTrigger value="recommendations">AI Recommendations</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Daily Average</CardTitle>
                <CardDescription>Caloric intake</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2,143 kcal</div>
                <p className="text-xs text-muted-foreground">+5% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Protein Goal</CardTitle>
                <CardDescription>Daily target</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">28.8g</div>
                <p className="text-xs text-muted-foreground">92% of recommended</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Meal Satisfaction</CardTitle>
                <CardDescription>Based on feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.7/5</div>
                <p className="text-xs text-muted-foreground">+0.3 from last month</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="col-span-3">
            <CardHeader>
              <CardTitle>Weekly Nutrition Trends</CardTitle>
              <CardDescription>Caloric and macronutrient intake over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={mealData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="calories" fill="#8884d8" name="Calories (kcal/10)" />
                    <Bar dataKey="protein" fill="#82ca9d" name="Protein (g)" />
                    <Bar dataKey="carbs" fill="#ffc658" name="Carbs (g)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="nutrition" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Macronutrient Distribution</CardTitle>
                <CardDescription>Percentage breakdown of your diet</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={nutritionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({name, percent}) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {nutritionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Nutrition Quality Score</CardTitle>
                <CardDescription>AI-generated assessment of your meal choices</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center h-80">
                  <div className="relative w-48 h-48 rounded-full flex items-center justify-center bg-slate-100">
                    <div className="absolute w-40 h-40 rounded-full bg-primary flex items-center justify-center">
                      <div className="text-4xl font-bold text-white">87/100</div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <p className="text-lg font-medium">Very Good</p>
                    <p className="text-sm text-muted-foreground">Your diet is well-balanced with room for improvement</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="recommendations" className="space-y-4">
          <Card>
            <CardHeader className="flex flex-row items-center">
              <div className="flex-1">
                <CardTitle>AI-Powered Recommendations</CardTitle>
                <CardDescription>Personalized nutrition advice based on your eating patterns</CardDescription>
              </div>
              <Salad className="h-8 w-8 text-primary" />
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {recommendations.map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
                      <TrendingUp className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{rec}</p>
                    </div>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8">
                <Button className="w-full">Generate Custom Meal Plan</Button>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Smart Features</CardTitle>
              <CardDescription>AI-driven tools coming soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border rounded-lg p-4 flex items-center">
                  <Utensils className="h-8 w-8 mr-3 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Personalized Meal Planner</h3>
                    <p className="text-sm text-muted-foreground">AI-generated meal plans based on your preferences</p>
                  </div>
                </div>
                <div className="border rounded-lg p-4 flex items-center">
                  <BrainCircuit className="h-8 w-8 mr-3 text-muted-foreground" />
                  <div>
                    <h3 className="font-medium">Nutrition Optimization</h3>
                    <p className="text-sm text-muted-foreground">Fine-tune your diet for specific health goals</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SmartMealAnalytics;