import { Button } from "@/shared/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/ui/DropdownMenu";
import { Menu } from "lucide-react";
import Link from "next/link";
import { MENU_LINKS } from "../../config/menuLinks";

export const NavigationDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu strokeWidth={3} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        {MENU_LINKS.map((item) => (
          <DropdownMenuItem key={item.href} asChild>
            <Link href={item.href}>{item.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
