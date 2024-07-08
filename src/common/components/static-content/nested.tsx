import { Card } from "@/components/ui/card";
import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";

export const NestedStaticContent = (props: { className?: string }) => {
  return (
    <Card className={cn("p-2", depthBorderColors[5], props.className)}>
      <span className="text-lg font-medium">Static Content</span>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
    </Card>
  );
};
