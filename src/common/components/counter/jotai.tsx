import { useCounter } from "@/stores/jotai";
import { StopWatchJotai } from "@/components/stop-watch/jotai";
import { Counter } from ".";

export const CounterJotai = (props: { className?: string }) => {
  const [counter, setCounter] = useCounter();

  return (
    <Counter
      className={props.className}
      counter={counter}
      setCounter={setCounter}
    >
      <StopWatchJotai />
    </Counter>
  );
};
