import { useChartTab } from "@/stores/recoil";
import { ExampleTableRecoil } from "../example-table/recoil";
import { Chart } from ".";

export const ChartRecoil = (props: { className?: string }) => {
  const [chartTab, setChartTab] = useChartTab();

  return (
    <Chart
      className={props.className}
      chartTab={chartTab}
      setChartTab={setChartTab}
    >
      <ExampleTableRecoil />
    </Chart>
  );
};
