import { useTimer } from "@/stores/jotai";
import { StopWatch } from ".";

export const StopWatchJotai = (props: { className?: string }) => {
  const [timer, setTimer] = useTimer();

  return (
    <StopWatch className={props.className} timer={timer} setTimer={setTimer} />
  );
};
