import { GlobalContextProvider } from "@/stores/context";

import { Card } from "@/components/ui/card";
import { GlobalHeader } from "@/components/global-header";
import { SearchInputContext } from "@/components/example-table/search-input/context";
import { ValuesSummaryContext } from "@/components/values-summary/context";
import { ChartContext } from "@/components/chart/context";
import { GithubProfileContext } from "@/components/github-profile/context";

import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";

export const ContextPage = () => {
  return (
    <GlobalContextProvider>
      <Card
        className={cn(
          "m-4 grid grid-cols-10 gap-2 p-2 shadow-sm",
          depthBorderColors[0],
        )}
      >
        <GlobalHeader className="col-span-full mb-4 mt-2 text-center" />

        <SearchInputContext className="col-span-3" />

        <ChartContext className="col-span-7" />

        <ValuesSummaryContext className="col-span-5" />

        <GithubProfileContext className="col-span-5" />
      </Card>
    </GlobalContextProvider>
  );
};
