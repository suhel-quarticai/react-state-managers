import { setCounter, useCounterStore } from "@/stores/valtio";
import { StopWatchValtio } from "../stop-watch/valtio";
import { Counter } from ".";

export const CounterValtio = (props: { className?: string }) => {
  const { counter } = useCounterStore();

  return (
    <Counter
      className={props.className}
      counter={counter}
      setCounter={setCounter}
    >
      <StopWatchValtio />
    </Counter>
  );
};
