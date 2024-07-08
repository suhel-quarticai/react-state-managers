import { Card } from "@/components/ui/card";
import { GlobalHeader } from "@/components/global-header";
import { SearchInput } from "@/components/search-input";
import { ValuesSummary } from "@/components/values-summary";
import { Chart } from "@/components/chart";
import { StaticContent } from "@/components/static-content";

import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";

function App() {
  return (
    <Card
      className={cn(
        "m-4 grid grid-cols-10 gap-2 p-2 shadow-sm",
        depthBorderColors[0],
      )}
    >
      <GlobalHeader className="col-span-full mb-4 mt-2 text-center" />

      <SearchInput className="col-span-3" />

      <Chart className="col-span-7" />

      <ValuesSummary className="col-span-5" />

      <StaticContent className="col-span-5" />
    </Card>
  );
}

export default App;
