import { useCounter } from "@/stores/recoil";
import { StopWatchRecoil } from "@/components/stop-watch/recoil";
import { Counter } from ".";

export const CounterRecoil = (props: { className?: string }) => {
  const [counter, setCounter] = useCounter();

  return (
    <Counter
      className={props.className}
      counter={counter}
      setCounter={setCounter}
    >
      <StopWatchRecoil />
    </Counter>
  );
};
