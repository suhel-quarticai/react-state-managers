import { observer } from "mobx-react";
import { globalStore } from "@/stores/mobx";
import { CounterMobx } from "@/components/counter/mobx";
import { NumberSlider } from ".";

export const NumberSliderMobx = observer((props: { className?: string }) => {
  const { sliderValue, setSliderValue } = globalStore;

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
