import { useChartTab } from "@/stores/jotai";
import { SelectChartTabs } from ".";

export const SelectChartTabsJotai = () => {
  const [chartTab, setChartTab] = useChartTab();

  return <SelectChartTabs chartTab={chartTab} setChartTab={setChartTab} />;
};
