import LifeOverviewBar from "@/components/LifeOverviewBar";
import TodayWidget from "@/components/TodayWidget";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">
            Welcome back! 👋
          </h1>
          <p className="text-lg text-muted-foreground">
            Your unified life dashboard — track, focus, and thrive.
          </p>
        </div>

        {/* Main Stats */}
        <div className="space-y-6 mb-8">
          <TodayWidget />
          <LifeOverviewBar />
        </div>

        {/* Quick Actions */}
        <div className="bg-card rounded-xl p-6 shadow-card mb-8">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Link to="/health">
              <Button variant="outline" className="w-full justify-start gap-2 hover:bg-health-light hover:border-health transition-all">
                <span className="text-health">💧</span>
                Log Water
              </Button>
            </Link>
            <Link to="/mind">
              <Button variant="outline" className="w-full justify-start gap-2 hover:bg-mind-light hover:border-mind transition-all">
                <span className="text-mind">🧠</span>
                Start Focus
              </Button>
            </Link>
            <Link to="/work">
              <Button variant="outline" className="w-full justify-start gap-2 hover:bg-work-light hover:border-work transition-all">
                <span className="text-work">✓</span>
                Add Task
              </Button>
            </Link>
            <Link to="/health">
              <Button variant="outline" className="w-full justify-start gap-2 hover:bg-growth-light hover:border-growth transition-all">
                <span className="text-growth">🌱</span>
                Track Habit
              </Button>
            </Link>
          </div>
        </div>

        {/* Featured Sections */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-mind rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Mind Space</h3>
            <p className="text-white/90 mb-4 text-sm">
              3 tasks pending • Next focus session in 45 min
            </p>
            <Link to="/mind">
              <Button variant="secondary" size="sm" className="gap-2">
                Go to Mind <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>

          <div className="bg-gradient-health rounded-xl p-6 text-white shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Health Check</h3>
            <p className="text-white/90 mb-4 text-sm">
              2 more glasses of water • Log tonight's sleep
            </p>
            <Link to="/health">
              <Button variant="secondary" size="sm" className="gap-2">
                Go to Health <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
