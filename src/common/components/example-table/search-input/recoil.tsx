import { useTableColumnFilters } from "@/stores/recoil";

import { NumberSliderRecoil } from "@/components/number-slider/recoil";
import { GithubSearchRecoil } from "@/components/github-profile/search/recoil";
import { SearchInput } from ".";

export const SearchInputRecoil = (props: { className?: string }) => {
  const [tableColumnFilters, setTableColumnFilters] = useTableColumnFilters();

  return (
    <SearchInput
      className={props.className}
      value={tableColumnFilters[0]?.value as string}
      onChange={(value) => setTableColumnFilters([{ id: "email", value }])}
    >
      <NumberSliderRecoil />

      <GithubSearchRecoil />
    </SearchInput>
  );
};
