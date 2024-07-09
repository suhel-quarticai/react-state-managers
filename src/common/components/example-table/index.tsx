import { faker } from "@faker-js/faker";

import { Card } from "@/components/ui/card";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";
import type { ColumnFiltersState } from "@tanstack/react-table";

const getData = (size = 0): Payment[] => {
  return new Array(size).fill(0).map(() => {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    return {
      id: faker.string.uuid(),
      fullName: `${firstName} ${lastName}`,
      email: faker.internet.email({ firstName, lastName }),
      amount: +faker.finance.amount(),
      status: faker.helpers.arrayElement([
        "pending",
        "processing",
        "success",
        "failed",
      ]),
    };
  });
};

const data = getData(4);

export const ExampleTable = (props: {
  className?: string;
  tableColumnFilters: ColumnFiltersState;
  setTableColumnFilters: (
    filters:
      | ColumnFiltersState
      | ((prev: ColumnFiltersState) => ColumnFiltersState),
  ) => void;
}) => {
  return (
    <Card className={cn(depthBorderColors[2], props.className)}>
      <DataTable
        columns={columns}
        data={data}
        columnFilters={props.tableColumnFilters}
        setColumnFilters={props.setTableColumnFilters}
      />
    </Card>
  );
};
