import { observer } from "mobx-react";
import { globalStore } from "@/stores/mobx";
import { ValuesSummary } from ".";

export const ValuesSummaryMobx = observer((props: { className?: string }) => {
  const { tableColumnFilters, sliderValue, counter, timer } = globalStore;

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
