import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Heart, 
  Smile, 
  Brain, 
  Briefcase, 
  TrendingUp, 
  Home as HomeIcon, 
  Clock, 
  Settings,
  LayoutDashboard
} from "lucide-react";

const navItems = [
  { name: "Dashboard", path: "/", icon: LayoutDashboard, color: "accent" },
  { name: "Health", path: "/health", icon: Heart, color: "health" },
  { name: "Enjoy", path: "/enjoy", icon: Smile, color: "enjoy" },
  { name: "Mind", path: "/mind", icon: Brain, color: "mind" },
  { name: "Work", path: "/work", icon: Briefcase, color: "work" },
  { name: "Growth", path: "/growth", icon: TrendingUp, color: "growth" },
  { name: "Home", path: "/home", icon: HomeIcon, color: "home" },
  { name: "Time", path: "/time", icon: Clock, color: "time" },
  { name: "Settings", path: "/settings", icon: Settings, color: "settings" },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-bold text-xl">
            Life Dashboard
          </Link>
          
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              const colorClass = `text-${item.color}`;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-2 px-3 py-2 rounded-lg transition-all duration-200",
                    "hover:bg-secondary",
                    isActive && "bg-secondary font-medium"
                  )}
                >
                  <Icon 
                    className={cn(
                      "w-4 h-4",
                      isActive && colorClass
                    )} 
                  />
                  <span className="text-sm">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu - scrollable */}
          <div className="md:hidden flex items-center gap-1 overflow-x-auto max-w-[70vw] no-scrollbar">
            {navItems.slice(0, 5).map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              const colorClass = `text-${item.color}`;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center justify-center p-2 rounded-lg transition-all duration-200 flex-shrink-0",
                    "hover:bg-secondary",
                    isActive && "bg-secondary"
                  )}
                  title={item.name}
                >
                  <Icon 
                    className={cn(
                      "w-5 h-5",
                      isActive && colorClass
                    )} 
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}
