import { useZustandStore } from "@/stores/zustand";
import { CounterZustand } from "../counter/zustand";
import { NumberSlider } from ".";

export const NumberSliderZustand = (props: { className?: string }) => {
  const { sliderValue, setSliderValue } = useZustandStore();

  return (
    <NumberSlider
      className={props.className}
      value={sliderValue}
      setValue={setSliderValue}
    >
      <CounterZustand />
    </NumberSlider>
  );
};
