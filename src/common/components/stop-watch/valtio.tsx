import { setTimer, useGlobalStore } from "@/stores/valtio";
import { StopWatch } from ".";

export const StopWatchValtio = (props: { className?: string }) => {
  const { timer } = useGlobalStore();

  return (
    <StopWatch className={props.className} timer={timer} setTimer={setTimer} />
  );
};
