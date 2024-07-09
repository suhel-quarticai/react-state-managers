import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Counter } from "../counter";
import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const NumberSlider = (props: { className?: string }) => {
  return (
    <Card
      className={cn(
        "space-y-2 p-2 pb-4",
        depthBorderColors[2],
        props.className,
      )}
    >
      <span className="text-lg font-medium">Drag the Slider</span>

      <Slider defaultValue={[33]} max={100} step={1} className="pb-4" />

      <Counter />
    </Card>
  );
};
