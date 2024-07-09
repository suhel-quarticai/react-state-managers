import { observer } from "mobx-react";
import { sliderValueStore } from "@/stores/mobx";
import { CounterMobx } from "@/components/counter/mobx";
import { NumberSlider } from ".";

export const NumberSliderMobx = observer((props: { className?: string }) => {
  const { sliderValue, setSliderValue } = sliderValueStore;

  return (
    <NumberSlider
      className={props.className}
      value={sliderValue}
      setValue={setSliderValue}
    >
      <CounterMobx />
    </NumberSlider>
  );
});
