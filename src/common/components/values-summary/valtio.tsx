import { useReadAllValues } from "@/stores/valtio";
import { ValuesSummary } from ".";

export const ValuesSummaryValtio = (props: { className?: string }) => {
  const {
    values: { tableColumnFilters, sliderValue, counter, timer },
  } = useReadAllValues();

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
