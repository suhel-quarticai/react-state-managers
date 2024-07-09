import { useChartTab } from "@/stores/recoil";
import { SelectChartTabs } from ".";

export const SelectChartTabsRecoil = () => {
  const [chartTab, setChartTab] = useChartTab();

  return <SelectChartTabs chartTab={chartTab} setChartTab={setChartTab} />;
};
