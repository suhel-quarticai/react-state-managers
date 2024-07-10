import { setChartTab, useGlobalStore } from "@/stores/valtio";
import { ExampleTableValtio } from "@/components/example-table/valtio";
import { Chart } from ".";

export const ChartValtio = (props: { className?: string }) => {
  const { chartTab } = useGlobalStore();

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
