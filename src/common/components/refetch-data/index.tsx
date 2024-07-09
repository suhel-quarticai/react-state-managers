import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SelectChartTabs } from "@/components/chart/select-chart-tabs";

import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";

export const RefetchTableData = () => {
  return (
    <Card className={cn("space-y-2 p-2", depthBorderColors[2])}>
      <p className="text-lg font-medium">Refetch Data</p>

      <div className="flex items-center gap-2">
        <Button variant="outline">Update Table</Button>
        <Button variant="outline">Update Chart</Button>
      </div>

      <SelectChartTabs />
    </Card>
  );
};
