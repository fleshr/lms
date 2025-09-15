import { RegisterForm } from "@/features/user/register";
import { routes } from "@/shared/config/routes";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/shared/ui/Card";
import Link from "next/link";

export const RegisterPage = () => {
  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <RegisterForm />
        <p className="text-muted-foreground mt-2 text-center text-sm">
          Already have an account?{" "}
          <Link className="text-foreground" href={routes.login}>
            Login
          </Link>
        </p>
      </CardContent>
    </Card>
  );
};
