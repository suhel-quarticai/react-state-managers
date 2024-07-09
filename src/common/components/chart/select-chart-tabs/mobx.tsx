import { observer } from "mobx-react";
import { chartTabStore } from "@/stores/mobx";
import { SelectChartTabs } from ".";

export const SelectChartTabsMobx = observer(() => {
  const { chartTab, setChartTab } = chartTabStore;

  return <SelectChartTabs chartTab={chartTab} setChartTab={setChartTab} />;
});
