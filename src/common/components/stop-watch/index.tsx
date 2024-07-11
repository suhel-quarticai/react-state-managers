import { useEffect, useState } from "react";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StopWatchValue } from "./components/value";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";
import { Pause, Play } from "lucide-react";

export const StopWatch = (
  props: React.PropsWithChildren<{
    className?: string;
    timer: number;
    setTimer: (time: number | ((prev: number) => number)) => void;
  }>,
) => {
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleStart = () => {
    if (intervalId) return;

    const newIntervalId = setInterval(() => {
      props.setTimer((prev) => prev + 10);
    }, 10);
    setIntervalId(newIntervalId);
  };

  const handleStop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  const handleReset = () => {
    props.setTimer(0);
    handleStop();
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[4], props.className)}
    >
      <span className="text-lg font-medium">Stop Watch</span>

      <div className="mb-2 flex items-center justify-center gap-3">
        {intervalId ? (
          <Button
            title="Stop"
            size="icon"
            variant="outline"
            className="rounded-full"
            onClick={handleStop}
          >
            <Pause className="h-4 w-4" />
          </Button>
        ) : (
          <Button
            title="Start"
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={handleStart}
          >
            <Play className="h-4 w-4" />
          </Button>
        )}

        <StopWatchValue timer={props.timer} />

        <Button variant="outline" size="sm" onClick={handleReset}>
          Reset
        </Button>
      </div>

      {props.children}
    </Card>
  );
};
