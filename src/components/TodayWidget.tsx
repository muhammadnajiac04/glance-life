import { Droplets, Moon, Footprints, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  color: string;
}

function StatItem({ icon, label, value, color }: StatItemProps) {
  return (
    <div className="flex items-center gap-3">
      <div className={cn(
        "p-2 rounded-lg",
        `bg-${color}-light`
      )}>
        {icon}
      </div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold">{value}</p>
      </div>
    </div>
  );
}

export default function TodayWidget() {
  const today = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="w-full bg-card rounded-xl p-6 shadow-card">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold">Today</h2>
          <p className="text-sm text-muted-foreground">{today}</p>
        </div>
        <div className="text-right">
          <p className="text-2xl font-bold text-health">7/12</p>
          <p className="text-xs text-muted-foreground">Tasks complete</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatItem
          icon={<Droplets className="w-4 h-4 text-mind" />}
          label="Water"
          value="6/8 cups"
          color="mind"
        />
        <StatItem
          icon={<Moon className="w-4 h-4 text-growth" />}
          label="Sleep"
          value="7.5 hrs"
          color="growth"
        />
        <StatItem
          icon={<Footprints className="w-4 h-4 text-health" />}
          label="Steps"
          value="8,432"
          color="health"
        />
        <StatItem
          icon={<CheckCircle2 className="w-4 h-4 text-work" />}
          label="Focus"
          value="3 sessions"
          color="work"
        />
      </div>
    </div>
  );
}
