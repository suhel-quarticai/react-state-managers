import { observer } from "mobx-react";
import { counterStore } from "@/stores/mobx";
import { StopWatchMobx } from "@/components/stop-watch/mobx";
import { Counter } from ".";

export const CounterMobx = observer((props: { className?: string }) => {
  const { counter, setCounter } = counterStore;

  return (
    <Counter
      className={props.className}
      counter={counter}
      setCounter={setCounter}
    >
      <StopWatchMobx />
    </Counter>
  );
});
