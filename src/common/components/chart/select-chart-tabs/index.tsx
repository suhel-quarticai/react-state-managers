import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";
import type { ChartTab } from "../components/chart";

export const SelectChartTabs = (props: {
  className?: string;
  chartTab: ChartTab;
  setChartTab: (chart: ChartTab) => void;
}) => {
  return (
    <Card className={cn("space-y-2 p-2", depthBorderColors[3])}>
      <p className="text-lg font-medium">Chart Tab</p>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          className="border"
          variant={props.chartTab === "desktop" ? "secondary" : "outline"}
          onClick={() => props.setChartTab("desktop")}
        >
          Desktop
        </Button>
        <Button
          size="sm"
          className="border"
          variant={props.chartTab === "mobile" ? "secondary" : "outline"}
          onClick={() => props.setChartTab("mobile")}
        >
          Mobile
        </Button>
      </div>
    </Card>
  );
};
