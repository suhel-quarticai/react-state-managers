import { observer } from "mobx-react";
import {
  counterStore,
  sliderValueStore,
  tableColumnFiltersStore,
  timerStore,
} from "@/stores/mobx";
import { ValuesSummary } from ".";

export const ValuesSummaryMobx = observer((props: { className?: string }) => {
  const { tableColumnFilters } = tableColumnFiltersStore;
  const { sliderValue } = sliderValueStore;
  const { counter } = counterStore;
  const { timer } = timerStore;

  return (
    <ValuesSummary
      className={props.className}
      sliderValue={sliderValue}
      searchText={tableColumnFilters[0]?.value as string}
      counter={counter}
      timer={timer}
    />
  );
});
