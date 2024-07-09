import { useSliderValue } from "@/stores/jotai";
import { CounterJotai } from "@/components/counter/jotai";
import { NumberSlider } from ".";

export const NumberSliderJotai = (props: { className?: string }) => {
  const [sliderValue, setSliderValue] = useSliderValue();

  return (
    <NumberSlider
      className={props.className}
      value={sliderValue}
      setValue={setSliderValue}
    >
      <CounterJotai />
    </NumberSlider>
  );
};
