import { Card } from "@/components/ui/card";
import { SearchInputValtio } from "@/components/example-table/search-input/valtio";
import { ChartValtio } from "@/components/chart/valtio";
import { ValuesSummaryValtio } from "@/components/values-summary/valtio";
import { GithubProfileValtio } from "@/components/github-profile/valtio";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const ValtioPage = () => {
  return (
    <Card
      className={cn(
        "m-4 grid grid-cols-10 gap-2 p-2 shadow-sm",
        depthBorderColors[0],
      )}
    >
      <SearchInputValtio className="col-span-3" />

      <ChartValtio className="col-span-7" />

      <ValuesSummaryValtio className="col-span-5" />

      <GithubProfileValtio className="col-span-5" />
    </Card>
  );
};
