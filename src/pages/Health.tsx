import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Droplets, Moon, Footprints, Dumbbell, Plus } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface HealthLog {
  type: string;
  value: number;
  time: string;
}

export default function Health() {
  const [waterCount, setWaterCount] = useState(6);
  const [logs, setLogs] = useState<HealthLog[]>([]);

  const addWater = () => {
    if (waterCount < 8) {
      setWaterCount(waterCount + 1);
      toast.success("Water logged! Stay hydrated 💧");
    } else {
      toast.info("Daily water goal achieved! 🎉");
    }
  };

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Health</h1>
          <p className="text-muted-foreground">Track your body and energy metrics</p>
        </div>

        {/* Quick Log Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {/* Water */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-mind-light rounded-lg">
                <Droplets className="w-6 h-6 text-mind" />
              </div>
              <span className="text-2xl font-bold text-mind">{waterCount}/8</span>
            </div>
            <h3 className="font-semibold mb-2">Water</h3>
            <p className="text-sm text-muted-foreground mb-3">cups today</p>
            <Button 
              onClick={addWater}
              className="w-full bg-mind hover:bg-mind-dark text-white"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-1" /> Log Cup
            </Button>
          </Card>

          {/* Sleep */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-growth-light rounded-lg">
                <Moon className="w-6 h-6 text-growth" />
              </div>
              <span className="text-2xl font-bold text-growth">7.5</span>
            </div>
            <h3 className="font-semibold mb-2">Sleep</h3>
            <p className="text-sm text-muted-foreground mb-3">hours last night</p>
            <Button 
              variant="outline"
              className="w-full border-growth text-growth hover:bg-growth-light"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-1" /> Log Sleep
            </Button>
          </Card>

          {/* Steps */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-health-light rounded-lg">
                <Footprints className="w-6 h-6 text-health" />
              </div>
              <span className="text-2xl font-bold text-health">8.4k</span>
            </div>
            <h3 className="font-semibold mb-2">Steps</h3>
            <p className="text-sm text-muted-foreground mb-3">of 10k goal</p>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-health rounded-full" style={{ width: '84%' }} />
            </div>
          </Card>

          {/* Exercise */}
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-enjoy-light rounded-lg">
                <Dumbbell className="w-6 h-6 text-enjoy" />
              </div>
              <span className="text-2xl font-bold text-enjoy">2</span>
            </div>
            <h3 className="font-semibold mb-2">Exercise</h3>
            <p className="text-sm text-muted-foreground mb-3">sessions this week</p>
            <Button 
              variant="outline"
              className="w-full border-enjoy text-enjoy hover:bg-enjoy-light"
              size="sm"
            >
              <Plus className="w-4 h-4 mr-1" /> Log Workout
            </Button>
          </Card>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Energy Wheel</h3>
            <div className="aspect-square bg-gradient-health rounded-full flex items-center justify-center">
              <div className="text-center text-white">
                <p className="text-4xl font-bold mb-2">65%</p>
                <p className="text-sm">Overall Health</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4">Health Tip</h3>
            <div className="bg-health-light p-4 rounded-lg mb-4">
              <p className="text-sm text-health-dark">
                💡 <strong>Tip of the Day:</strong> Drinking water first thing in the morning 
                helps kickstart your metabolism and hydrates your body after sleep.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Weekly Water Goal</span>
                <span className="text-sm font-semibold text-mind">42/56 cups</span>
              </div>
              <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-mind rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
