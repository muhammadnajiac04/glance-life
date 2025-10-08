import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Circle, Play, Pause, Plus, Smile, Meh, Frown } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export default function Mind() {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, text: "Review project proposal", completed: true },
    { id: 2, text: "Meditation session", completed: true },
    { id: 3, text: "Write journal entry", completed: false },
    { id: 4, text: "Plan tomorrow's goals", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");
  const [isPomodoro, setIsPomodoro] = useState(false);
  const [pomodoroTime, setPomodoroTime] = useState(25);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
      toast.success("Task added!");
    }
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const togglePomodoro = () => {
    setIsPomodoro(!isPomodoro);
    if (!isPomodoro) {
      toast.success("Focus session started! 🎯");
    }
  };

  const completedCount = tasks.filter(t => t.completed).length;

  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Mind</h1>
          <p className="text-muted-foreground">Focus and mindfulness tools</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Tasks & Mood */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tasks */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Tasks</h2>
                <span className="text-sm text-muted-foreground">
                  {completedCount}/{tasks.length} complete
                </span>
              </div>

              <div className="flex gap-2 mb-4">
                <Input
                  placeholder="Add a new task..."
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && addTask()}
                />
                <Button onClick={addTask} className="bg-mind hover:bg-mind-dark text-white flex-shrink-0">
                  <Plus className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                {tasks.map(task => (
                  <div 
                    key={task.id}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary transition-colors group"
                  >
                    <Checkbox
                      checked={task.completed}
                      onCheckedChange={() => toggleTask(task.id)}
                      className="data-[state=checked]:bg-mind data-[state=checked]:border-mind"
                    />
                    <span className={task.completed ? "line-through text-muted-foreground flex-1" : "flex-1"}>
                      {task.text}
                    </span>
                    {task.completed && (
                      <CheckCircle2 className="w-4 h-4 text-mind" />
                    )}
                  </div>
                ))}
              </div>
            </Card>

            {/* Mood Tracker */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">How are you feeling?</h2>
              <div className="flex gap-4 justify-center">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 h-20 flex-col gap-2 hover:bg-health-light hover:border-health"
                >
                  <Smile className="w-8 h-8 text-health" />
                  <span className="text-sm">Great</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 h-20 flex-col gap-2 hover:bg-enjoy-light hover:border-enjoy"
                >
                  <Meh className="w-8 h-8 text-enjoy" />
                  <span className="text-sm">Okay</span>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="flex-1 h-20 flex-col gap-2 hover:bg-home-light hover:border-home"
                >
                  <Frown className="w-8 h-8 text-home" />
                  <span className="text-sm">Not great</span>
                </Button>
              </div>
            </Card>
          </div>

          {/* Right Column - Pomodoro */}
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-4">Pomodoro Timer</h2>
              <div className="aspect-square bg-gradient-mind rounded-full flex items-center justify-center mb-6">
                <div className="text-center text-white">
                  <p className="text-5xl font-bold mb-2">{pomodoroTime}:00</p>
                  <p className="text-sm">Focus Time</p>
                </div>
              </div>
              <Button 
                onClick={togglePomodoro}
                className={`w-full ${isPomodoro ? 'bg-home hover:bg-home-dark' : 'bg-mind hover:bg-mind-dark'} text-white`}
                size="lg"
              >
                {isPomodoro ? (
                  <>
                    <Pause className="w-5 h-5 mr-2" /> Pause Session
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5 mr-2" /> Start Focus
                  </>
                )}
              </Button>
              <div className="mt-4 space-y-2">
                <p className="text-sm text-muted-foreground text-center">
                  Today's focus sessions: 3 🔥
                </p>
                <div className="flex gap-1 justify-center">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={`w-2 h-2 rounded-full ${i <= 3 ? 'bg-mind' : 'bg-secondary'}`} />
                  ))}
                </div>
              </div>
            </Card>

            {/* Calm Zone */}
            <Card className="p-6 bg-gradient-growth text-white">
              <h3 className="text-lg font-semibold mb-2">Calm Zone</h3>
              <p className="text-sm text-white/90 mb-4">
                Take a moment to breathe and center yourself.
              </p>
              <Button variant="secondary" size="sm" className="w-full">
                Start Breathing Exercise
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
