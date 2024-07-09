import { useTableColumnFiltersStore } from "@/stores/zustand";
import { ExampleTable } from ".";

export const ExampleTableZustand = (props: { className?: string }) => {
  const { tableColumnFilters, setTableColumnFilters } =
    useTableColumnFiltersStore();

  return (
    <ExampleTable
      className={props.className}
      tableColumnFilters={tableColumnFilters}
      setTableColumnFilters={setTableColumnFilters}
    />
  );
};
