import { setTableColumnFilters, useGlobalStore } from "@/stores/valtio";
import { NumberSliderValtio } from "@/components/number-slider/valtio";
import { GithubSearchValtio } from "@/components/github-profile/search/valtio";
import { SearchInput } from ".";

export const SearchInputValtio = (props: { className?: string }) => {
  const { tableColumnFilters } = useGlobalStore();

  return (
    <SearchInput
      className={props.className}
      value={tableColumnFilters[0]?.value as string}
      onChange={(value) => setTableColumnFilters([{ id: "email", value }])}
    >
      <NumberSliderValtio />

      <GithubSearchValtio />
    </SearchInput>
  );
};
