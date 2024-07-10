import { observer } from "mobx-react";
import { globalStore } from "@/stores/mobx";
import { SelectChartTabs } from ".";

export const SelectChartTabsMobx = observer(() => {
  const { chartTab, setChartTab } = globalStore;

  return <SelectChartTabs chartTab={chartTab} setChartTab={setChartTab} />;
});
