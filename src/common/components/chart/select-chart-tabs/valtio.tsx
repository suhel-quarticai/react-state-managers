import { setChartTab, useChartTabStore } from "@/stores/valtio";
import { SelectChartTabs } from ".";

export const SelectChartTabsValtio = () => {
  const { chartTab } = useChartTabStore();

  return <SelectChartTabs chartTab={chartTab} setChartTab={setChartTab} />;
};
