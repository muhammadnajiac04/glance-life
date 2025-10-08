import { cn } from "@/lib/utils";

interface CategoryProgress {
  name: string;
  progress: number;
  color: string;
}

const categories: CategoryProgress[] = [
  { name: "Health", progress: 65, color: "health" },
  { name: "Enjoy", progress: 40, color: "enjoy" },
  { name: "Mind", progress: 75, color: "mind" },
  { name: "Work", progress: 55, color: "work" },
  { name: "Growth", progress: 45, color: "growth" },
  { name: "Home", progress: 80, color: "home" },
  { name: "Time", progress: 60, color: "time" },
];

export default function LifeOverviewBar() {
  return (
    <div className="w-full bg-card rounded-xl p-6 shadow-card">
      <h2 className="text-lg font-semibold mb-4">Life Overview</h2>
      
      {/* Rainbow bar */}
      <div className="flex h-3 rounded-full overflow-hidden bg-secondary mb-6">
        {categories.map((category) => (
          <div
            key={category.name}
            className={cn(
              "transition-all duration-500 relative group",
              `bg-${category.color}`
            )}
            style={{ width: `${100 / categories.length}%`, opacity: category.progress / 100 }}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] font-medium text-white drop-shadow-lg">
                {category.progress}%
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
        {categories.map((category) => (
          <div key={category.name} className="flex items-center gap-2">
            <div 
              className={cn(
                "w-3 h-3 rounded-full flex-shrink-0",
                `bg-${category.color}`
              )}
            />
            <div className="flex flex-col min-w-0">
              <span className="text-xs font-medium truncate">{category.name}</span>
              <span className="text-xs text-muted-foreground">{category.progress}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
