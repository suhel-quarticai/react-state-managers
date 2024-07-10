import {
  setTableColumnFilters,
  useTableColumnFiltersStore,
} from "@/stores/valtio";
import { ExampleTable } from ".";

export const ExampleTableValtio = (props: { className?: string }) => {
  const { tableColumnFilters } = useTableColumnFiltersStore();

  return (
    <ExampleTable
      className={props.className}
      tableColumnFilters={[...tableColumnFilters]} // had to clone the array for the mutation
      setTableColumnFilters={setTableColumnFilters}
    />
  );
};
