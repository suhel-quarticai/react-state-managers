import { useChartTabStore } from "@/stores/zustand";
import { SelectChartTabs } from ".";

export const SelectChartTabsZustand = () => {
  const { chartTab, setChartTab } = useChartTabStore();

  return <SelectChartTabs chartTab={chartTab} setChartTab={setChartTab} />;
};
