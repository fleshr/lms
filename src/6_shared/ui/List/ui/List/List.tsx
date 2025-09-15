import { cn } from "@/shared/lib/utils";
import type { ReactNode } from "react";

interface ListProps<T> {
  className?: string;
  items: T[];
  emptyMessage?: string;
  renderItem: (item: T) => ReactNode;
}

export const List = <T extends { id: string }>(props: ListProps<T>) => {
  const { items, emptyMessage, className, renderItem } = props;

  if (items.length === 0) {
    return (
      emptyMessage && (
        <p className="text-muted-foreground text-center">{emptyMessage}</p>
      )
    );
  }

  return (
    <ul className={cn("flex flex-col gap-1", className)}>
      {items.map((course) => (
        <li key={course.id}>{renderItem(course)}</li>
      ))}
    </ul>
  );
};
