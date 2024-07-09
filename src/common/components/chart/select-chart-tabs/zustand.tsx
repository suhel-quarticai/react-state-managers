import { useZustandStore } from "@/stores/zustand";
import { SelectChartTabs } from ".";

export const SelectChartTabsZustand = () => {
  const { chartTab, setChartTab } = useZustandStore();

  return <SelectChartTabs chartTab={chartTab} setChartTab={setChartTab} />;
};
