import { useGlobalContext } from "@/stores/context/use-context";
import { SelectChartTabsContext } from "@/components/chart/select-chart-tabs/context";
import { GithubSearch } from ".";

export const GithubSearchContext = (props: { className?: string }) => {
  const { githubSearch, setGithubSearch } = useGlobalContext();
  return (
    <GithubSearch
      className={props.className}
      value={githubSearch}
      setValue={setGithubSearch}
    >
      <SelectChartTabsContext />
    </GithubSearch>
  );
};
