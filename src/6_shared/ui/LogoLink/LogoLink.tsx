import { routes } from "@/shared/config/routes";
import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { Logo } from "../Logo";

interface LogoLinkProps {
  className?: string;
}

export const LogoLink = (props: LogoLinkProps) => {
  const { className } = props;

  return (
    <Link
      href={routes.main}
      className={cn(
        "hover:bg-accent focus:bg-accent block w-fit rounded-sm px-2 py-1.5 transition-colors",
        className,
      )}
    >
      <Logo />
    </Link>
  );
};
