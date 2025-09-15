"use client";

import type { User } from "@/entities/auth";
import { routes } from "@/shared/config/routes";
import { Avatar, AvatarFallback, AvatarImage } from "@/shared/ui/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/shared/ui/DropdownMenu";
import Link from "next/link";
import { useCallback, useTransition } from "react";
import { logoutAction } from "../../api/logout";

interface UserDropdownProps {
  user: User;
}

export const UserDropdown = (props: UserDropdownProps) => {
  const { user } = props;
  const [isPending, startTransition] = useTransition();

  const handleLogout = useCallback(() => {
    startTransition(logoutAction);
  }, []);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar data-testid="user-avatar">
          {user.image && <AvatarImage src={user.image} alt={user.name} />}
          <AvatarFallback>{(user.name[0] ?? "?").toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="min-w-38" align="end">
        <DropdownMenuLabel className="flex flex-col gap-0.5">
          <span>{user.name}</span>
          <span className="text-muted-foreground text-xs font-normal">
            {user.email}
          </span>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href={routes.dashboard}>Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={routes.settings}>Settings</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          data-testid="logout-btn"
          disabled={isPending}
          onClick={handleLogout}
        >
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
