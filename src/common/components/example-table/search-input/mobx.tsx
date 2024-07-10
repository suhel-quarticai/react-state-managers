import { observer } from "mobx-react";
import { globalStore } from "@/stores/mobx";

import { NumberSliderMobx } from "@/components/number-slider/mobx";
import { GithubSearchMobx } from "@/components/github-profile/search/mobx";
import { SearchInput } from ".";

export const SearchInputMobx = observer((props: { className?: string }) => {
  const { tableColumnFilters, setTableColumnFilters } = globalStore;

  return (
    <SearchInput
      className={props.className}
      value={tableColumnFilters[0]?.value as string}
      onChange={(value) => setTableColumnFilters([{ id: "email", value }])}
    >
      <NumberSliderMobx />

      <GithubSearchMobx />
    </SearchInput>
  );
});
