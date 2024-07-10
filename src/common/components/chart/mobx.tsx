import { observer } from "mobx-react";
import { globalStore } from "@/stores/mobx";
import { ExampleTableMobx } from "@/components/example-table/mobx";
import { Chart } from ".";

export const ChartMobx = observer((props: { className?: string }) => {
  const { chartTab, setChartTab } = globalStore;

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
