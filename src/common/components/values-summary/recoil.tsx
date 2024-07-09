import { useReadAllValues } from "@/stores/recoil";
import { ValuesSummary } from ".";

export const ValuesSummaryRecoil = (props: { className?: string }) => {
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
