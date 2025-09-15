import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/shared/ui/NavigationMenu";
import Link from "next/link";
import { MENU_LINKS } from "../../config/menuLinks";

export const Navigation = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {MENU_LINKS.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
