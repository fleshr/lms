import { cn } from "@/shared/lib/utils";
import type { ElementType, ReactNode } from "react";

interface WrapperProps {
  as?: ElementType;
  className?: string;
  children?: ReactNode;
}

export const Wrapper = (props: WrapperProps) => {
  const { as: Element = "div", className, children } = props;

  return (
    <Element className={cn("mx-auto w-full max-w-7xl px-5", className)}>
      {children}
    </Element>
  );
};
