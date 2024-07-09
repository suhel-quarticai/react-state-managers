import { useTableColumnFilters } from "@/stores/recoil";
import { ExampleTable } from ".";

export const ExampleTableRecoil = (props: { className?: string }) => {
  const [tableColumnFilters, setTableColumnFilters] = useTableColumnFilters();

  return (
    <ExampleTable
      className={props.className}
      tableColumnFilters={tableColumnFilters}
      setTableColumnFilters={setTableColumnFilters}
    />
  );
};
