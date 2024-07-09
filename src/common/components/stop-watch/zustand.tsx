import { useZustandStore } from "@/stores/zustand";
import { StopWatch } from ".";

export const StopWatchZustand = (props: { className?: string }) => {
  const { timer, setTimer } = useZustandStore();

  return (
    <StopWatch className={props.className} timer={timer} setTimer={setTimer} />
  );
};
