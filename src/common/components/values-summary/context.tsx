import { useGlobalContext } from "@/stores/context/use-context";
import { ValuesSummary } from ".";

export const ValuesSummaryContext = (props: { className?: string }) => {
  const { searchText } = useGlobalContext();

  return (
    <ValuesSummary
      className={props.className}
      sliderValue={0}
      searchText={searchText}
      counter={0}
      timer={""}
    />
  );
};
