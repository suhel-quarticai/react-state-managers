import { useGlobalContext } from "@/stores/context/use-context";
import { SelectChartTabs } from "@/components/chart/select-chart-tabs";
import { GithubSearch } from ".";

export const GithubSearchContext = (props: { className?: string }) => {
  const { githubSearch, setGithubSearch } = useGlobalContext();
  return (
    <GithubSearch
      className={props.className}
      value={githubSearch}
      setValue={setGithubSearch}
    >
      <SelectChartTabs />
    </GithubSearch>
  );
};
