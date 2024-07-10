import { setChartTab, useGlobalStore } from "@/stores/valtio";
import { SelectChartTabs } from ".";

export const SelectChartTabsValtio = () => {
  const { chartTab } = useGlobalStore();

  return <SelectChartTabs chartTab={chartTab} setChartTab={setChartTab} />;
};
