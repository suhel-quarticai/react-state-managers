import { Button } from "@/components/ui/button";
import { Card } from "../ui/card";
import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const RefetchTableData = () => {
  return (
    <Card className={cn("space-y-2 p-2", depthBorderColors[2])}>
      <p className="text-lg font-medium">Refetch Table Data</p>

      <div className="flex items-center gap-2">
        <Button variant="outline">Update Table</Button>
        <Button variant="outline">Update Chart</Button>
      </div>
    </Card>
  );
};
