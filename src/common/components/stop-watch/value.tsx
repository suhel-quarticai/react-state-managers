import { formatMilliseconds } from "@/utils/helpers";
import { useMemo } from "react";

export const StopWatchValue = (props: { timer: number }) => {
  const [minutes, seconds, milliseconds] = useMemo(
    () => formatMilliseconds(props.timer),
    [props.timer],
  );

  return (
    <div className="flex items-center gap-0.5">
      <span className="min-w-6 text-center">{minutes}</span>
      <span>:</span>
      <span className="min-w-6 text-center">{seconds}</span>
      <span>:</span>
      <span className="min-w-6 text-center">{milliseconds}</span>
    </div>
  );
};
