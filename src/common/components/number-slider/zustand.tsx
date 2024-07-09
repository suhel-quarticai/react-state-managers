import { useSliderValueStore } from "@/stores/zustand";
import { CounterZustand } from "../counter/zustand";
import { NumberSlider } from ".";

export const NumberSliderZustand = (props: { className?: string }) => {
  const { sliderValue, setSliderValue } = useSliderValueStore();

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
