import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home as HomeIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Home</h1>
          <p className="text-muted-foreground">Manage chores, bills, and routines</p>
        </div>
        
        <Card className="p-12 text-center">
          <HomeIcon className="w-16 h-16 text-home mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Home Module</h2>
          <p className="text-muted-foreground mb-4">
            Coming soon - Manage shopping, chores, and household tasks
          </p>
        </Card>
      </div>
    </div>
  );
}
