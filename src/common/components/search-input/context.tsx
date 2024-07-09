import { useGlobalContext } from "@/stores/context/use-context";

import { NumberSliderContext } from "@/components/number-slider/context";
import { RefetchTableData } from "@/components/refetch-data";
import { SearchInput } from ".";

export const SearchInputContext = (props: { className?: string }) => {
  const { searchText, setSearchText } = useGlobalContext();

  return (
    <SearchInput
      className={props.className}
      value={searchText}
      onChange={setSearchText}
    >
      <NumberSliderContext />

      <RefetchTableData />
    </SearchInput>
  );
};
