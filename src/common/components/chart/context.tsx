import { useGlobalContext } from "@/stores/context/use-context";
import { ExampleTableContext } from "@/components/example-table/context";
import { Chart } from ".";

export const ChartContext = (props: { className?: string }) => {
  const { chartTab, setChartTab } = useGlobalContext();

  return (
    <Chart
      className={props.className}
      chartTab={chartTab}
      setChartTab={setChartTab}
    >
      <ExampleTableContext />
    </Chart>
  );
};
