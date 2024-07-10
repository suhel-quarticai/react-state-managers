import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

import { depthBorderColors } from "@/utils/constants";
import { cn } from "@/utils/ui";

export const GithubSearch = (
  props: React.PropsWithChildren<{
    className?: string;
    value: string;
    setValue: (value: string) => void;
  }>,
) => {
  return (
    <Card
      className={cn("space-y-2 p-2", depthBorderColors[2], props.className)}
    >
      <p className="text-lg font-medium">Github Username</p>

      <div className="flex items-center gap-2">
        <Input
          type="search"
          placeholder="Github username..."
          value={props.value}
          onChange={(e) => props.setValue(e.target.value)}
        />
      </div>

      {props.children}
    </Card>
  );
};
