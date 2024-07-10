import { setTimer, useTimerStore } from "@/stores/valtio";
import { StopWatch } from ".";

export const StopWatchValtio = (props: { className?: string }) => {
  const { timer } = useTimerStore();

  return (
    <StopWatch className={props.className} timer={timer} setTimer={setTimer} />
  );
};
