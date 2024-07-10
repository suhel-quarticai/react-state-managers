import { observer } from "mobx-react";
import { globalStore } from "@/stores/mobx";
import { StopWatch } from ".";

export const StopWatchMobx = observer((props: { className?: string }) => {
  const { timer, setTimer } = globalStore;

  return (
    <StopWatch className={props.className} timer={timer} setTimer={setTimer} />
  );
});
