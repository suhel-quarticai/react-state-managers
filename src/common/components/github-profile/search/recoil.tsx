import { useGithubSearch } from "@/stores/recoil";
import { SelectChartTabsRecoil } from "@/components/chart/select-chart-tabs/recoil";
import { GithubSearch } from ".";

export const GithubSearchRecoil = (props: { className?: string }) => {
  const [githubSearch, setGithubSearch] = useGithubSearch();

  return (
    <GithubSearch
      className={props.className}
      value={githubSearch}
      setValue={setGithubSearch}
    >
      <SelectChartTabsRecoil />
    </GithubSearch>
  );
};
