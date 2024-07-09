import { Card } from "@/components/ui/card";
import { InteractiveChart, type ChartTab } from "./components/chart";

import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";

export const Chart = (
  props: React.PropsWithChildren<{
    className?: string;
    chartTab: ChartTab;
    setChartTab: (chart: ChartTab) => void;
  }>,
) => {
  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[1], props.className)}
    >
      <InteractiveChart
        activeChart={props.chartTab}
        setActiveChart={props.setChartTab}
      />

      {props.children}
    </Card>
  );
};
