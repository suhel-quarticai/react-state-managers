import { useGlobalContext } from "@/stores/context/use-context";
import { CounterContext } from "@/components/counter/context";
import { NumberSlider } from ".";

export const NumberSliderContext = (props: { className?: string }) => {
  const { sliderValue, setSliderValue } = useGlobalContext();

  return (
    <NumberSlider
      className={props.className}
      value={sliderValue}
      setValue={setSliderValue}
    >
      <CounterContext />
    </NumberSlider>
  );
};
