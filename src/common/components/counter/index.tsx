import { Minus, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StopWatch } from "@/components/stop-watch";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const Counter = () => {
  return (
    <Card className={cn("space-y-2 p-2", depthBorderColors[3])}>
      <span className="text-lg font-medium">Counter</span>

      <div className="flex items-center justify-center gap-3">
        <Button
          title="Increment"
          size="icon"
          variant="outline"
          className="rounded-full"
        >
          <Plus className="h-4 w-4" />
        </Button>
        <span>0</span>
        <Button
          title="Decrement"
          size="icon"
          variant="outline"
          className="rounded-full"
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      <StopWatch />
    </Card>
  );
};
