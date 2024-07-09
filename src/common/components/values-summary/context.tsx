import { useGlobalContext } from "@/stores/context/use-context";
import { ValuesSummary } from ".";

export const ValuesSummaryContext = (props: { className?: string }) => {
  const { searchText, sliderValue, counter, timer } = useGlobalContext();

  return (
    <ValuesSummary
      className={props.className}
      sliderValue={sliderValue}
      searchText={searchText}
      counter={counter}
      timer={timer}
    />
  );
};
