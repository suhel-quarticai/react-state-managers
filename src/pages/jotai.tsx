import { Card } from "@/components/ui/card";
import { SearchInputJotai } from "@/components/example-table/search-input/jotai";
import { ChartJotai } from "@/components/chart/jotai";
import { ValuesSummaryJotai } from "@/components/values-summary/jotai";
import { GithubProfileJotai } from "@/components/github-profile/jotai";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const JotaiPage = () => {
  return (
    <Card
      className={cn(
        "m-4 grid grid-cols-10 gap-2 p-2 shadow-sm",
        depthBorderColors[0],
      )}
    >
      <SearchInputJotai className="col-span-3" />

      <ChartJotai className="col-span-7" />

      <ValuesSummaryJotai className="col-span-5" />

      <GithubProfileJotai className="col-span-5" />
    </Card>
  );
};
