import { useTableColumnFilters } from "@/stores/jotai";

import { NumberSliderJotai } from "@/components/number-slider/jotai";
import { GithubSearchJotai } from "@/components/github-profile/search/jotai";
import { SearchInput } from ".";

export const SearchInputJotai = (props: { className?: string }) => {
  const [tableColumnFilters, setTableColumnFilters] = useTableColumnFilters();

  return (
    <SearchInput
      className={props.className}
      value={tableColumnFilters[0]?.value as string}
      onChange={(value) => setTableColumnFilters([{ id: "email", value }])}
    >
      <NumberSliderJotai />

      <GithubSearchJotai />
    </SearchInput>
  );
};
