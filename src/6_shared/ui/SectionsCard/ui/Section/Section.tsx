import type { ReactNode } from "react";

interface SectionProps {
  title?: string;
  className?: string;
  children: ReactNode;
}

export const Section = (props: SectionProps) => {
  const { title, children, className } = props;

  return (
    <section className="flex-1 first:pl-0 first:pt-0 last:pb-0 last:pr-0 group-data-[orientation=horizontal]:px-8 group-data-[orientation=vertical]:py-8">
      {title && <h2 className="mb-2 text-lg font-bold">{title}</h2>}
      <div className={className}>{children}</div>
    </section>
  );
};
