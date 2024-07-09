import { useZustandStore } from "@/stores/zustand";
import { SelectChartTabsZustand } from "@/components/chart/select-chart-tabs/zustand";
import { GithubSearch } from ".";

export const GithubSearchZustand = (props: { className?: string }) => {
  const { githubSearch, setGithubSearch } = useZustandStore();

  return (
    <GithubSearch
      className={props.className}
      value={githubSearch}
      setValue={setGithubSearch}
    >
      <SelectChartTabsZustand />
    </GithubSearch>
  );
};
