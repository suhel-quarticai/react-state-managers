import { RecoilRoot } from "recoil";

import { Card } from "@/components/ui/card";
import { GlobalHeader } from "@/components/global-header";
import { SearchInputRecoil } from "@/components/example-table/search-input/recoil";
import { ChartRecoil } from "@/components/chart/recoil";
import { ValuesSummaryRecoil } from "@/components/values-summary/recoil";
import { GithubProfileRecoil } from "@/components/github-profile/recoil";

import { cn } from "@/utils/ui";
import { depthBorderColors } from "@/utils/constants";

export const RecoilPage = () => {
  return (
    <RecoilRoot>
      <Card
        className={cn(
          "m-4 grid grid-cols-10 gap-2 p-2 shadow-sm",
          depthBorderColors[0],
        )}
      >
        <GlobalHeader className="col-span-full mb-4 mt-2 text-center" />

        <SearchInputRecoil className="col-span-3" />

        <ChartRecoil className="col-span-7" />

        <ValuesSummaryRecoil className="col-span-5" />

        <GithubProfileRecoil className="col-span-5" />
      </Card>
    </RecoilRoot>
  );
};
