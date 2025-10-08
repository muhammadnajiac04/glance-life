import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smile } from "lucide-react";

export default function Enjoy() {
  return (
    <div className="min-h-screen bg-background pt-20 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Enjoy</h1>
          <p className="text-muted-foreground">Fun and relaxation tools</p>
        </div>
        
        <Card className="p-12 text-center">
          <Smile className="w-16 h-16 text-enjoy mx-auto mb-4" />
          <h2 className="text-2xl font-semibold mb-2">Enjoy Module</h2>
          <p className="text-muted-foreground mb-4">
            Coming soon - Playlists, watchlists, and hobby tracking
          </p>
        </Card>
      </div>
    </div>
  );
}
