import { useTableColumnFiltersStore } from "@/stores/zustand";
import { NumberSliderZustand } from "@/components/number-slider/zustand";
import { GithubSearchZustand } from "@/components/github-profile/search/zustand";
import { SearchInput } from ".";

export const SearchInputZustand = (props: { className?: string }) => {
  const { tableColumnFilters, setTableColumnFilters } =
    useTableColumnFiltersStore();

  return (
    <SearchInput
      className={props.className}
      value={tableColumnFilters[0]?.value as string}
      onChange={(value) => setTableColumnFilters([{ id: "email", value }])}
    >
      <NumberSliderZustand />

      <GithubSearchZustand />
    </SearchInput>
  );
};
