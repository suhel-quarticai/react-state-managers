import { useZustandStore } from "@/stores/zustand";
import { ExampleTableZustand } from "@/components/example-table/zustand";
import { Chart } from ".";

export const ChartZustand = (props: { className?: string }) => {
  const { chartTab, setChartTab } = useZustandStore();

  return (
    <Chart
      className={props.className}
      chartTab={chartTab}
      setChartTab={setChartTab}
    >
      <ExampleTableZustand />
    </Chart>
  );
};
