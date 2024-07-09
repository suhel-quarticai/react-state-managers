import { depthBorderColors } from "@/utils/constants";
import { Card } from "../ui/card";
import { cn } from "@/utils/ui";
import { Button } from "../ui/button";
import { useGlobalContext } from "@/stores/context/use-context";

export const SelectChartTabs = () => {
  const { chartTab, setChartTab } = useGlobalContext();

  return (
    <Card className={cn("space-y-2 p-2", depthBorderColors[3])}>
      <p className="text-lg font-medium">Chart Tab</p>

      <div className="flex items-center gap-2">
        <Button
          size="sm"
          className="border"
          variant={chartTab === "desktop" ? "secondary" : "outline"}
          onClick={() => setChartTab("desktop")}
        >
          Desktop
        </Button>
        <Button
          size="sm"
          className="border"
          variant={chartTab === "mobile" ? "secondary" : "outline"}
          onClick={() => setChartTab("mobile")}
        >
          Mobile
        </Button>
      </div>
    </Card>
  );
};
