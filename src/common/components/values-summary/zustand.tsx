import { useReadAllValues } from "@/stores/zustand";
import { ValuesSummary } from ".";

export const ValuesSummaryZustand = (props: { className?: string }) => {
  const { tableColumnFilters, sliderValue, counter, timer } =
    useReadAllValues();

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
