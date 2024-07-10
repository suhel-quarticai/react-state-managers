import { observer } from "mobx-react";
import { globalStore } from "@/stores/mobx";
import { SelectChartTabsMobx } from "@/components/chart/select-chart-tabs/mobx";
import { GithubSearch } from ".";

export const GithubSearchMobx = observer((props: { className?: string }) => {
  const { githubSearch, setGithubSearch } = globalStore;

  return (
    <GithubSearch
      className={props.className}
      value={githubSearch}
      setValue={setGithubSearch}
    >
      <SelectChartTabsMobx />
    </GithubSearch>
  );
});
