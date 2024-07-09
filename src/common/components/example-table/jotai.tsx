import { useTableColumnFilters } from "@/stores/jotai";
import { ExampleTable } from ".";

export const ExampleTableJotai = (props: { className?: string }) => {
  const [tableColumnFilters, setTableColumnFilters] = useTableColumnFilters();

  return (
    <ExampleTable
      className={props.className}
      tableColumnFilters={tableColumnFilters}
      setTableColumnFilters={setTableColumnFilters}
    />
  );
};
