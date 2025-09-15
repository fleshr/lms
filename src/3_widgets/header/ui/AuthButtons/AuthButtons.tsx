import { Button } from "@/shared/ui/Button";
import Link from "next/link";
import { AUTH_LINKS } from "../../config/authLinks";

export const AuthButtons = () => {
  return (
    <div className="flex gap-2">
      {AUTH_LINKS.map((item) => (
        <Button key={item.href} variant={item.variant} asChild>
          <Link href={item.href}>{item.label}</Link>
        </Button>
      ))}
    </div>
  );
};
