import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Clock, Users, Timer, ArrowUpDown, RefreshCw } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const QueuePage: React.FC = () => {
  // Sample queue data
  const queueData = [
    { id: 1, name: 'John Smith', position: 1, estimatedTime: '2 mins', status: 'active' },
    { id: 2, name: 'Emily Johnson', position: 2, estimatedTime: '5 mins', status: 'active' },
    { id: 3, name: 'Michael Brown', position: 3, estimatedTime: '8 mins', status: 'active' },
    { id: 4, name: 'Sarah Davis', position: 4, estimatedTime: '10 mins', status: 'active' },
    { id: 5, name: 'David Wilson', position: 5, estimatedTime: '12 mins', status: 'active' },
  ];

  const queueStats = {
    currentLength: 12,
    averageWaitTime: '8 mins',
    peakHours: '12:00 - 13:30',
    servedToday: 87,
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Users className="h-10 w-10 mr-4 text-primary" />
          <div>
            <h1 className="text-3xl font-bold">Smart Queue Management</h1>
            <p className="text-muted-foreground">Real-time queue monitoring and optimization</p>
          </div>
        </div>
        <Button className="flex items-center gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh Data
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Queue</CardTitle>
            <CardDescription>People waiting</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{queueStats.currentLength}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <ArrowUpDown className="mr-1 h-4 w-4" />
              <span>+3 from 10 minutes ago</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Wait</CardTitle>
            <CardDescription>Current estimate</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{queueStats.averageWaitTime}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Timer className="mr-1 h-4 w-4" />
              <span>-2 mins from yesterday</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Peak Hours</CardTitle>
            <CardDescription>Busiest time today</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{queueStats.peakHours}</div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              <span>Prepare for rush</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Served Today</CardTitle>
            <CardDescription>Total customers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{queueStats.servedToday}</div>
            <Progress value={87} className="h-2" />
            <p className="text-xs text-muted-foreground mt-2">87% of daily average</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Current Queue Status</CardTitle>
          <CardDescription>Live view of people in line</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative">
            <div className="absolute left-0 right-0 h-0.5 bg-muted top-1/2 transform -translate-y-1/2"></div>
            <div className="relative flex justify-between">
              {[0, 25, 50, 75, 100].map((percent) => (
                <div key={percent} className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary mb-2"></div>
                  <span className="text-xs text-muted-foreground">{percent === 0 ? 'Start' : percent === 100 ? 'Served' : `${percent}%`}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 space-y-4">
            {queueData.map((person) => (
              <div key={person.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${person.name}`} />
                    <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{person.name}</p>
                    <p className="text-sm text-muted-foreground">Position: {person.position}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Badge variant="outline" className="mr-4">
                    <Clock className="h-3 w-3 mr-1" />
                    {person.estimatedTime}
                  </Badge>
                  <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Active</Badge>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 flex justify-center">
            <Button variant="outline" className="mr-2">View All</Button>
            <Button>Join Queue</Button>
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader>
          <CardTitle>AI Queue Optimization</CardTitle>
          <CardDescription>Smart suggestions to improve queue efficiency</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-medium mb-2">Peak Time Approaching</h3>
              <p className="text-sm text-muted-foreground mb-4">Our AI predicts a 30% increase in queue length in the next 45 minutes based on historical patterns.</p>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">Open Additional Counter</Button>
                <Button size="sm">View Prediction Details</Button>
              </div>
            </div>
            
            <div className="p-4 bg-primary/10 rounded-lg">
              <h3 className="font-medium mb-2">Service Speed Optimization</h3>
              <p className="text-sm text-muted-foreground mb-4">Counter #3 is processing customers 15% slower than average. Consider staff rotation or additional support.</p>
              <Button variant="outline" size="sm">Acknowledge</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QueuePage;