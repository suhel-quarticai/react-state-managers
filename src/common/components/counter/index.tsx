import { Minus, Plus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const Counter = (
  props: React.PropsWithChildren<{
    className?: string;
    counter: number;
    setCounter: (count: number) => void;
  }>,
) => {
  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[3], props.className)}
    >
      <span className="text-lg font-medium">Counter</span>

      <div className="flex items-center justify-center gap-3">
        <Button
          title="Increment"
          data-testid="increment-button"
          size="icon"
          variant="outline"
          className="rounded-full"
          onClick={() => props.setCounter(props.counter + 1)}
        >
          <Plus className="h-4 w-4" />
        </Button>
        <span data-testid="counter-value">{props.counter}</span>
        <Button
          title="Decrement"
          data-testid="decrement-button"
          size="icon"
          variant="outline"
          className="rounded-full"
          onClick={() => props.setCounter(props.counter - 1)}
        >
          <Minus className="h-4 w-4" />
        </Button>
      </div>

      {props.children}
    </Card>
  );
};
