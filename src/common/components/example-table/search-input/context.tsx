import { useGlobalContext } from "@/stores/context/use-context";

import { NumberSliderContext } from "@/components/number-slider/context";
import { GithubSearchContext } from "@/components/github-profile/search/context";
import { SearchInput } from ".";

export const SearchInputContext = (props: { className?: string }) => {
  const { tableColumnFilters, setTableColumnFilters } = useGlobalContext();

  return (
    <SearchInput
      className={props.className}
      value={tableColumnFilters[0]?.value as string}
      onChange={(value) => setTableColumnFilters([{ id: "email", value }])}
    >
      <NumberSliderContext />

      <GithubSearchContext />
    </SearchInput>
  );
};
