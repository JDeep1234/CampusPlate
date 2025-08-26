import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Flame, Target, Star, Award } from "lucide-react";

interface GamificationWidgetProps {
  streak: number;
  level: number;
  points: number;
  nextLevelPoints: number;
  achievements: string[];
  rank?: string;
}

const GamificationWidget = ({ 
  streak, 
  level, 
  points, 
  nextLevelPoints, 
  achievements, 
  rank 
}: GamificationWidgetProps) => {
  const progress = (points / nextLevelPoints) * 100;

  return (
    <Card className="border-0 shadow-elegant bg-gradient-to-r from-primary/10 to-success/10">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-foreground">Your Impact Journey</h3>
          {rank && (
            <Badge className="bg-gradient-primary text-primary-foreground">
              <Trophy className="w-3 h-3 mr-1" />
              {rank}
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
              <Flame className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground">{streak}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-gradient-eco rounded-full flex items-center justify-center mx-auto mb-2">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div className="text-2xl font-bold text-foreground">{level}</div>
            <div className="text-xs text-muted-foreground">Eco Level</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-foreground">Progress to Level {level + 1}</span>
            <span className="text-sm text-muted-foreground">{points}/{nextLevelPoints}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <div className="space-y-2">
          <h4 className="font-medium text-foreground flex items-center gap-2">
            <Award className="w-4 h-4 text-warning" />
            Recent Achievements
          </h4>
          <div className="flex flex-wrap gap-2">
            {achievements.slice(0, 3).map((achievement, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {achievement}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GamificationWidget;