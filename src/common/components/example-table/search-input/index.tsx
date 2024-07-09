import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const SearchInput = (
  props: React.PropsWithChildren<{
    className?: string;
    value: string;
    onChange: (value: string) => void;
  }>,
) => {
  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[1], props.className)}
    >
      <span className="text-lg font-medium">Search Input for Table</span>

      <Input
        type="search"
        placeholder="Search email..."
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
      />

      {props.children}
    </Card>
  );
};
