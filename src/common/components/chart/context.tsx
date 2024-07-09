import { ExampleTable } from "@/components/example-table";
import { Chart } from ".";
import { useGlobalContext } from "@/stores/context/use-context";

export const ChartContext = (props: { className?: string }) => {
  const { chartTab, setChartTab } = useGlobalContext();

  return (
    <Chart
      className={props.className}
      chartTab={chartTab}
      setChartTab={setChartTab}
    >
      <ExampleTable />
    </Chart>
  );
};
