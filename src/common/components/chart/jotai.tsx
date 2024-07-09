import { useChartTab } from "@/stores/jotai";
import { ExampleTableJotai } from "@/components/example-table/jotai";
import { Chart } from ".";

export const ChartJotai = (props: { className?: string }) => {
  const [chartTab, setChartTab] = useChartTab();

  return (
    <Chart
      className={props.className}
      chartTab={chartTab}
      setChartTab={setChartTab}
    >
      <ExampleTableJotai />
    </Chart>
  );
};
