import { setSliderValue, useSliderValueStore } from "@/stores/valtio";
import { CounterValtio } from "@/components/counter/valtio";
import { NumberSlider } from ".";

export const NumberSliderValtio = (props: { className?: string }) => {
  const { sliderValue } = useSliderValueStore();

  return (
    <NumberSlider
      className={props.className}
      value={sliderValue}
      setValue={setSliderValue}
    >
      <CounterValtio />
    </NumberSlider>
  );
};
