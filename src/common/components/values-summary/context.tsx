import { useGlobalContext } from "@/stores/context/use-context";
import { ValuesSummary } from ".";

export const ValuesSummaryContext = (props: { className?: string }) => {
  const { tableColumnFilters, sliderValue, counter, timer } =
    useGlobalContext();

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
