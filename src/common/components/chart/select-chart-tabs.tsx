import { depthBorderColors } from "@/utils/constants";
import { Card } from "../ui/card";
import { cn } from "@/utils/ui";
import { Button } from "../ui/button";

export const SelectChartTabs = () => {
  return (
    <Card className={cn("space-y-2 p-2", depthBorderColors[3])}>
      <p className="text-lg font-medium">Select Chart Tab</p>

      <div className="flex items-center gap-2">
        <Button size="sm" variant="secondary">
          Desktop
        </Button>
        <Button size="sm" variant="outline">
          Mobile
        </Button>
      </div>
    </Card>
  );
};
