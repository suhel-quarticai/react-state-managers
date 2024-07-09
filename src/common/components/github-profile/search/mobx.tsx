import { observer } from "mobx-react";
import { githubSearchStore } from "@/stores/mobx";
import { SelectChartTabsMobx } from "@/components/chart/select-chart-tabs/mobx";
import { GithubSearch } from ".";

export const GithubSearchMobx = observer((props: { className?: string }) => {
  const { githubSearch, setGithubSearch } = githubSearchStore;

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
