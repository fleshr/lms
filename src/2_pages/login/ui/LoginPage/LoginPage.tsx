import { LoginForm } from "@/features/user/login";
import { routes } from "@/shared/config/routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/Card";
import Link from "next/link";

export const LoginPage = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <LoginForm />
        <p className="text-muted-foreground mt-2 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link className="text-foreground" href={routes.register}>
            Register
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
