import { observer } from "mobx-react";
import { globalStore } from "@/stores/mobx";
import { ExampleTable } from ".";

export const ExampleTableMobx = observer((props: { className?: string }) => {
  const { tableColumnFilters, setTableColumnFilters } = globalStore;

  return (
    <ExampleTable
      className={props.className}
      tableColumnFilters={tableColumnFilters}
      setTableColumnFilters={setTableColumnFilters}
    />
  );
});
