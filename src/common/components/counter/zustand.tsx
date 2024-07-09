import { useZustandStore } from "@/stores/zustand";
import { StopWatchZustand } from "@/components/stop-watch/zustand";
import { Counter } from ".";

export const CounterZustand = (props: { className?: string }) => {
  const { counter, setCounter } = useZustandStore();

  return (
    <Counter
      className={props.className}
      counter={counter}
      setCounter={setCounter}
    >
      <StopWatchZustand />
    </Counter>
  );
};
