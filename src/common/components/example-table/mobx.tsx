import { observer } from "mobx-react";
import { tableColumnFiltersStore } from "@/stores/mobx";
import { ExampleTable } from ".";

export const ExampleTableMobx = observer((props: { className?: string }) => {
  const { tableColumnFilters, setTableColumnFilters } = tableColumnFiltersStore;

  return (
    <ExampleTable
      className={props.className}
      tableColumnFilters={tableColumnFilters}
      setTableColumnFilters={setTableColumnFilters}
    />
  );
});
