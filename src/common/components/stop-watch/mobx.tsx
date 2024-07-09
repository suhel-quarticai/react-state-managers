import { observer } from "mobx-react";
import { timerStore } from "@/stores/mobx";
import { StopWatch } from ".";

export const StopWatchMobx = observer((props: { className?: string }) => {
  const { timer, setTimer } = timerStore;

  return (
    <StopWatch className={props.className} timer={timer} setTimer={setTimer} />
  );
});
