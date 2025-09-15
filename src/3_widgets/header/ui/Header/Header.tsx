import { getUser } from "@/entities/auth";
import { UserDropdown } from "@/features/user/dropdown";
import { routes } from "@/shared/config/routes";
import { getDevice } from "@/shared/lib/getDevice";
import { cn } from "@/shared/lib/utils";
import { Logo } from "@/shared/ui/Logo";
import Link from "next/link";
import { AuthButtons } from "../AuthButtons/AuthButtons";
import { AuthDropdown } from "../AuthDropdown/AuthDropdown";
import { Navigation } from "../Navigation/Navigation";
import { NavigationDropdown } from "../NavigationDropdown/NavigationDropdown";

export const Header = async () => {
  const user = await getUser();
  const isMobile = await getDevice("mobile");

  return (
    <header
      className={cn(
        "grid h-14 items-center gap-5",
        isMobile ? "grid-cols-3" : "grid-cols-[auto_1fr_auto]",
      )}
    >
      {isMobile && <NavigationDropdown />}
      <Link
        className="hover:bg-accent focus:bg-accent justify-self-center rounded-sm px-2 py-1.5 transition-colors"
        href={routes.main}
      >
        <Logo />
      </Link>
      {!isMobile && <Navigation />}
      <div className="justify-self-end">
        {!user && !isMobile && <AuthButtons />}
        {!user && isMobile && <AuthDropdown />}
        {user && <UserDropdown user={user} />}
      </div>
    </header>
  );
};
