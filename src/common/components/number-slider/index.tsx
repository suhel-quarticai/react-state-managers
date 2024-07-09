import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const NumberSlider = (
  props: React.PropsWithChildren<{
    className?: string;
    value: number;
    setValue: (value: number) => void;
  }>,
) => {
  return (
    <Card
      className={cn(
        "space-y-2 p-2 pb-4",
        depthBorderColors[2],
        props.className,
      )}
    >
      <span className="text-lg font-medium">Drag the Slider</span>

      <Slider
        max={100}
        step={1}
        value={[props.value]}
        onValueChange={(e) => props.setValue(e[0])}
        className="pb-4"
      />

      {props.children}
    </Card>
  );
};
