import { setGithubSearch, useGithubSearchStore } from "@/stores/valtio";
import { SelectChartTabsValtio } from "@/components/chart/select-chart-tabs/valtio";
import { GithubSearch } from ".";

export const GithubSearchValtio = (props: { className?: string }) => {
  const { githubSearch } = useGithubSearchStore();

  return (
    <GithubSearch
      className={props.className}
      value={githubSearch}
      setValue={setGithubSearch}
    >
      <SelectChartTabsValtio />
    </GithubSearch>
  );
};
