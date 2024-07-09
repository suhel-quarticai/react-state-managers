import { cn } from "@/utils/ui";
import { Card } from "../ui/card";
import { depthBorderColors } from "@/utils/constants";

export const ValuesSummary = (props: {
  className?: string;
  sliderValue: number;
  searchText: string;
  counter: number;
  timer: string;
}) => {
  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[1], props.className)}
    >
      <span className="text-lg font-medium">Selected Values</span>

      <div className="grid grid-cols-4 gap-4">
        <Value label="Slider" value={props.sliderValue} />
        <Value label="Search" value={props.searchText} />
        <Value label="Counter" value={props.counter} />
        <Value label="Timer" value={props.timer} />
      </div>
    </Card>
  );
};

const Value = (props: { label: string; value: string | number }) => {
  return (
    <Card className={cn("flex flex-col p-2", depthBorderColors[2])}>
      <span className="text-sm text-muted-foreground">{props.label}</span>
      <span className="truncate font-medium">{props.value}</span>
    </Card>
  );
};
