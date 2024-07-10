import { setTableColumnFilters, useGlobalStore } from "@/stores/valtio";
import { ExampleTable } from ".";

export const ExampleTableValtio = (props: { className?: string }) => {
  const { tableColumnFilters } = useGlobalStore();

  return (
    <ExampleTable
      className={props.className}
      tableColumnFilters={[...tableColumnFilters]} // had to clone the array for the mutation
      setTableColumnFilters={setTableColumnFilters}
    />
  );
};
