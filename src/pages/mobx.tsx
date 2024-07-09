import { Card } from "@/components/ui/card";
import { SearchInputMobx } from "@/components/example-table/search-input/mobx";
import { ChartMobx } from "@/components/chart/mobx";
import { ValuesSummaryMobx } from "@/components/values-summary/mobx";
import { GithubProfileMobx } from "@/components/github-profile/mobx";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const MobXPage = () => {
  return (
    <Card
      className={cn(
        "m-4 grid grid-cols-10 gap-2 p-2 shadow-sm",
        depthBorderColors[0],
      )}
    >
      <SearchInputMobx className="col-span-3" />

      <ChartMobx className="col-span-7" />

      <ValuesSummaryMobx className="col-span-5" />

      <GithubProfileMobx className="col-span-5" />
    </Card>
  );
};
