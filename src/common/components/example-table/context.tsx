import { useGlobalContext } from "@/stores/context/use-context";
import { ExampleTable } from ".";

export const ExampleTableContext = (props: { className?: string }) => {
  const { tableColumnFilters, setTableColumnFilters } = useGlobalContext();

  return (
    <ExampleTable
      className={props.className}
      tableColumnFilters={tableColumnFilters}
      setTableColumnFilters={setTableColumnFilters}
    />
  );
};
