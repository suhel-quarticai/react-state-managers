import { useGlobalContext } from "@/stores/context/use-context";
import { StopWatchContext } from "@/components/stop-watch/context";
import { Counter } from ".";

export const CounterContext = (props: { className?: string }) => {
  const { counter, setCounter } = useGlobalContext();

  return (
    <Counter
      className={props.className}
      counter={counter}
      setCounter={setCounter}
    >
      <StopWatchContext />
    </Counter>
  );
};
