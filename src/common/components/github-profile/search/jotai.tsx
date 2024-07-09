import { useGithubSearch } from "@/stores/jotai";
import { SelectChartTabsJotai } from "@/components/chart/select-chart-tabs/jotai";
import { GithubSearch } from ".";

export const GithubSearchJotai = (props: { className?: string }) => {
  const [githubSearch, setGithubSearch] = useGithubSearch();

  return (
    <GithubSearch
      className={props.className}
      value={githubSearch}
      setValue={setGithubSearch}
    >
      <SelectChartTabsJotai />
    </GithubSearch>
  );
};
