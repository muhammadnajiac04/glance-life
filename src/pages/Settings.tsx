import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Bell, Moon, Download, Trash2, User } from "lucide-react";

export default function Settings() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Settings</h1>
          <p className="text-muted-foreground">Personalize your dashboard experience</p>
        </div>

        <div className="space-y-6">
          {/* Profile */}
          <Card className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-work flex items-center justify-center text-white text-2xl font-bold">
                U
              </div>
              <div>
                <h2 className="text-xl font-semibold">User Profile</h2>
                <p className="text-sm text-muted-foreground">Manage your account settings</p>
              </div>
            </div>
            <Button variant="outline" className="w-full md:w-auto">
              <User className="w-4 h-4 mr-2" /> Edit Profile
            </Button>
          </Card>

          {/* Notifications */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Bell className="w-5 h-5" /> Notifications
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="water-reminder" className="flex-1">
                  <div>
                    <p className="font-medium">Water Reminders</p>
                    <p className="text-sm text-muted-foreground">Get reminded to stay hydrated</p>
                  </div>
                </Label>
                <Switch id="water-reminder" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="task-reminder" className="flex-1">
                  <div>
                    <p className="font-medium">Task Reminders</p>
                    <p className="text-sm text-muted-foreground">Notifications for pending tasks</p>
                  </div>
                </Label>
                <Switch id="task-reminder" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="focus-reminder" className="flex-1">
                  <div>
                    <p className="font-medium">Focus Session Reminders</p>
                    <p className="text-sm text-muted-foreground">Pomodoro break notifications</p>
                  </div>
                </Label>
                <Switch id="focus-reminder" />
              </div>
            </div>
          </Card>

          {/* Theme */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Moon className="w-5 h-5" /> Appearance
            </h2>
            <div className="flex items-center justify-between">
              <Label htmlFor="dark-mode" className="flex-1">
                <div>
                  <p className="font-medium">Dark Mode</p>
                  <p className="text-sm text-muted-foreground">Toggle dark theme</p>
                </div>
              </Label>
              <Switch id="dark-mode" />
            </div>
          </Card>

          {/* Data Management */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-4">Data Management</h2>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start gap-2">
                <Download className="w-4 h-4" /> Export Data
              </Button>
              <Button variant="outline" className="w-full justify-start gap-2 text-destructive hover:bg-destructive/10">
                <Trash2 className="w-4 h-4" /> Clear All Data
              </Button>
            </div>
          </Card>

          {/* About */}
          <Card className="p-6">
            <h2 className="text-lg font-semibold mb-2">About</h2>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Life Dashboard v1.0.0</p>
              <p>Your unified control center for health, focus, and daily life.</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
