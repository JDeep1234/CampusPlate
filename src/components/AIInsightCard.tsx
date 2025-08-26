import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Sparkles, TrendingUp, Leaf } from "lucide-react";

interface AIInsightCardProps {
  type: "nutrition" | "sustainability" | "prediction" | "optimization";
  title: string;
  content: string;
  confidence?: number;
  impact?: string;
}

const AIInsightCard = ({ type, title, content, confidence, impact }: AIInsightCardProps) => {
  const getIcon = () => {
    switch (type) {
      case "nutrition": return <Sparkles className="w-4 h-4" />;
      case "sustainability": return <Leaf className="w-4 h-4" />;
      case "prediction": return <TrendingUp className="w-4 h-4" />;
      case "optimization": return <Brain className="w-4 h-4" />;
    }
  };

  const getColor = () => {
    switch (type) {
      case "nutrition": return "bg-info/10 border-info/20 text-info";
      case "sustainability": return "bg-success/10 border-success/20 text-success";
      case "prediction": return "bg-warning/10 border-warning/20 text-warning";
      case "optimization": return "bg-primary/10 border-primary/20 text-primary";
    }
  };

  return (
    <Card className={`border-2 ${getColor()} bg-opacity-50 backdrop-blur-sm animate-fade-in`}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getColor()}`}>
            {getIcon()}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <h4 className="font-semibold text-foreground">{title}</h4>
              {confidence && (
                <Badge variant="outline" className="text-xs">
                  {confidence}% confident
                </Badge>
              )}
            </div>
            <p className="text-sm text-muted-foreground mb-2">{content}</p>
            {impact && (
              <div className="flex items-center gap-1 text-xs text-success">
                <Leaf className="w-3 h-3" />
                {impact}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AIInsightCard;