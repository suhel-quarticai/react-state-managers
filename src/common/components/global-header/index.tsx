import { cn } from "@/utils/ui";

export const GlobalHeader = (props: { className?: string }) => {
  return (
    <h1 className={cn("text-2xl font-medium", props.className)}>
      React State Managers
    </h1>
  );
};
