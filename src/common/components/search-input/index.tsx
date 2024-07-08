import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { NumberSlider } from "@/components/number-slider";
import { RefetchTableData } from "@/components/refetch-data";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const SearchInput = (props: { className?: string }) => {
  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[1], props.className)}
    >
      <span className="text-lg font-medium">Search Input for Table</span>

      <Input type="search" placeholder="Search email..." />

      <NumberSlider />

      <RefetchTableData />
    </Card>
  );
};
