import { Card } from "@/components/ui/card";
import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";

export const StaticContent = (props: { className?: string }) => {
  return (
    <Card className={cn("p-2", depthBorderColors[2], props.className)}>
      <span className="text-lg font-medium">Static Content</span>
      <p className="text-muted-foreground">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam sit
        alias distinctio quod ducimus quia laborum ad dolorum eaque? Dolore
        voluptate fugit totam laborum? Libero voluptatibus quo ad incidunt
        asperiores.
      </p>
    </Card>
  );
};
