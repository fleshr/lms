import { routes } from "@/shared/config/routes";
import { Button } from "@/shared/ui/Button";
import Link from "next/link";

export const NotFoundPage = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center py-16">
      <h1 className="text-3xl font-bold">Not Found</h1>
      <p className="text-muted-foreground mt-2 text-base">
        Could not find requested resource
      </p>
      <Button className="mt-4" asChild>
        <Link href={routes.main}>Go Home</Link>
      </Button>
    </div>
  );
};
