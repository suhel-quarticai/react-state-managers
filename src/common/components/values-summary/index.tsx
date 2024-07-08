import { cn } from "@/utils/ui";
import { Card } from "../ui/card";
import { depthBorderColors } from "@/utils/constants";

export const ValuesSummary = (props: { className?: string }) => {
  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[1], props.className)}
    >
      <span className="text-lg font-medium">Selected Values</span>

      <div className="grid grid-cols-4 gap-4">
        <Value label="Slider" value="24" />
        <Value label="Search" value="test value" />
        <Value label="Counter" value="5" />
        <Value label="Timer" value="00:01:05" />
      </div>
    </Card>
  );
};

const Value = (props: { label: string; value: string | number }) => {
  return (
    <Card className={cn("flex flex-col p-2", depthBorderColors[2])}>
      <span className="text-sm text-muted-foreground">{props.label}</span>
      <span className="font-medium">{props.value}</span>
    </Card>
  );
};
