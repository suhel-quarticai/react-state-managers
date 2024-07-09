import {
  useCounter,
  useSliderValue,
  useTableColumnFilters,
  useTimer,
} from "@/stores/recoil";
import { ValuesSummary } from ".";

export const ValuesSummaryRecoil = (props: { className?: string }) => {
  const [tableColumnFilters] = useTableColumnFilters();
  const [sliderValue] = useSliderValue();
  const [counter] = useCounter();
  const [timer] = useTimer();

  return (
    <ValuesSummary
      className={props.className}
      sliderValue={sliderValue}
      searchText={tableColumnFilters[0]?.value as string}
      counter={counter}
      timer={timer}
    />
  );
};
