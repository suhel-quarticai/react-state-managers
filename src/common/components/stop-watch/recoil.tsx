import { useTimer } from "@/stores/recoil";
import { StopWatch } from ".";

export const StopWatchRecoil = (props: { className?: string }) => {
  const [timer, setTimer] = useTimer();

  return (
    <StopWatch className={props.className} timer={timer} setTimer={setTimer} />
  );
};
