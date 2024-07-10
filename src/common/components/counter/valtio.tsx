import { setCounter, useGlobalStore } from "@/stores/valtio";
import { StopWatchValtio } from "../stop-watch/valtio";
import { Counter } from ".";

export const CounterValtio = (props: { className?: string }) => {
  const { counter } = useGlobalStore();

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
