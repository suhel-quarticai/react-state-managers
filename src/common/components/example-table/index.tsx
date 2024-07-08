import { Card } from "@/components/ui/card";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";
import { faker } from "@faker-js/faker";

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

export const ExampleTable = (props: { className?: string }) => {
  const data = getData(3);

  return (
    <Card className={cn(depthBorderColors[2], props.className)}>
      <DataTable columns={columns} data={data} />
    </Card>
  );
};
