import { observer } from "mobx-react";
import { chartTabStore } from "@/stores/mobx";
import { ExampleTableMobx } from "@/components/example-table/mobx";
import { Chart } from ".";

export const ChartMobx = observer((props: { className?: string }) => {
  const { chartTab, setChartTab } = chartTabStore;

  return (
    <Chart
      className={props.className}
      chartTab={chartTab}
      setChartTab={setChartTab}
    >
      <ExampleTableMobx />
    </Chart>
  );
});
