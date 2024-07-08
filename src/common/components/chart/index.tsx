import { Card } from "@/components/ui/card";
import { ExampleTable } from "@/components/example-table";
import { InteractiveChart } from "./chart";

import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";

export const Chart = (props: { className?: string }) => {
  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[1], props.className)}
    >
      <InteractiveChart />

      <ExampleTable />
    </Card>
  );
};
