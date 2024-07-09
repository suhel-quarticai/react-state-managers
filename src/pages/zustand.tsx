import { Card } from "@/components/ui/card";
import { GlobalHeader } from "@/components/global-header";
import { SearchInputZustand } from "@/components/example-table/search-input/zustand";
import { ValuesSummaryZustand } from "@/components/values-summary/zustand";
import { ChartZustand } from "@/components/chart/zustand";
import { GithubProfileZustand } from "@/components/github-profile/zustand";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const ZustandPage = () => {
  return (
    <Card
      className={cn(
        "m-4 grid grid-cols-10 gap-2 p-2 shadow-sm",
        depthBorderColors[0],
      )}
    >
      <GlobalHeader className="col-span-full mb-4 mt-2 text-center" />

      <SearchInputZustand className="col-span-3" />

      <ChartZustand className="col-span-7" />

      <ValuesSummaryZustand className="col-span-5" />

      <GithubProfileZustand className="col-span-5" />
    </Card>
  );
};
