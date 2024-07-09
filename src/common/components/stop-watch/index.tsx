import { useEffect, useRef } from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StopWatchValue } from "./value";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const StopWatch = (
  props: React.PropsWithChildren<{
    className?: string;
    timer: number;
    setTimer: (time: number | ((prev: number) => number)) => void;
  }>,
) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      props.setTimer((prev) => prev + 10);
    }, 10);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    props.setTimer(0);
    handleStop();
  };

  useEffect(() => {
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[4], props.className)}
    >
      <span className="text-lg font-medium">Stop Watch</span>

      <div className="mb-2 flex items-center justify-center gap-3">
        <Button variant="outline" size="sm" onClick={handleStart}>
          Start
        </Button>
        <Button variant="outline" size="sm" onClick={handleStop}>
          Stop
        </Button>

        <StopWatchValue timer={props.timer} />

        <Button variant="outline" size="sm" onClick={handleReset}>
          Reset
        </Button>
      </div>

      {props.children}
    </Card>
  );
};
