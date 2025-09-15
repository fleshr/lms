import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import type { ReactNode } from "react";

interface ListItemProps {
  label: string;
  href: string;
  suffix?: ReactNode;
  preffix?: ReactNode;
  size?: "sm" | "md";
  className?: string;
}

export const ListItem = (props: ListItemProps) => {
  const { label, suffix, preffix, href, className } = props;

  return (
    <Link
      className={cn(
        "hover:bg-accent focus:bg-accent flex items-center gap-2 rounded-md px-2 py-1",
        props.size === "sm" ? "text-sm" : "text-base",
        className,
      )}
      href={href}
    >
      {preffix}
      <span className="mr-auto">{label}</span>
      {suffix}
    </Link>
  );
};
