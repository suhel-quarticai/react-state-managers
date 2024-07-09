import { useSliderValue } from "@/stores/recoil";
import { CounterRecoil } from "@/components/counter/recoil";
import { NumberSlider } from ".";

export const NumberSliderRecoil = (props: { className?: string }) => {
  const [sliderValue, setSliderValue] = useSliderValue();

  return (
    <NumberSlider
      className={props.className}
      value={sliderValue}
      setValue={setSliderValue}
    >
      <CounterRecoil />
    </NumberSlider>
  );
};
