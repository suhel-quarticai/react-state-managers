import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { NestedStaticContent } from "@/components/static-content/nested";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const StopWatch = () => {
  return (
    <Card className={cn("space-y-2 p-2", depthBorderColors[4])}>
      <span className="text-lg font-medium">Stop Watch</span>

      <div className="mb-2 flex items-center justify-center gap-3">
        <Button variant="outline" size="sm">
          Start
        </Button>
        <span>00:00:00</span>
        <Button variant="outline" size="sm">
          Stop
        </Button>
      </div>

      <NestedStaticContent />
    </Card>
  );
};
