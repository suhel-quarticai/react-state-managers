import { useGlobalContext } from "@/stores/context/use-context";
import { StopWatch } from ".";

export const StopWatchContext = (props: { className?: string }) => {
  const { timer, setTimer } = useGlobalContext();

  return (
    <StopWatch className={props.className} timer={timer} setTimer={setTimer} />
  );
};
