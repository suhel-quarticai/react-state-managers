import { useGlobalContext } from "@/stores/context/use-context";
import { SelectChartTabs } from ".";

export const SelectChartTabsContext = () => {
  const { chartTab, setChartTab } = useGlobalContext();

  return <SelectChartTabs chartTab={chartTab} setChartTab={setChartTab} />;
};
