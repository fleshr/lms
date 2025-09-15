import { cn } from "@/shared/lib/utils";
import { Card, CardContent } from "@/shared/ui/Card";
import type { ReactNode } from "react";

interface SectionsCardProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  children?: ReactNode;
}

export const SectionsCard = (props: SectionsCardProps) => {
  const { className, children, orientation = "vertical" } = props;

  return (
    <Card data-orientation={orientation} className={cn("group", className)}>
      <CardContent
        className={cn("divide-border flex", {
          "flex-col divide-y": orientation === "vertical",
          "flex-row divide-x": orientation === "horizontal",
        })}
      >
        {children}
      </CardContent>
    </Card>
  );
};
