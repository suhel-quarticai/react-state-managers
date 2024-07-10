import { setChartTab, useChartTabStore } from "@/stores/valtio";
import { ExampleTableValtio } from "@/components/example-table/valtio";
import { Chart } from ".";

export const ChartValtio = (props: { className?: string }) => {
  const { chartTab } = useChartTabStore();

  return (
    <Chart
      className={props.className}
      chartTab={chartTab}
      setChartTab={setChartTab}
    >
      <ExampleTableValtio />
    </Chart>
  );
};
