import { getUser } from "@/entities/auth";
import { ChangePasswordForm } from "@/features/user/change-password";
import { UpdateUserInfoForm } from "@/features/user/update-info";
import { routes } from "@/shared/config/routes";
import { getDevice } from "@/shared/lib/getDevice";
import { Section, SectionsCard } from "@/shared/ui/SectionsCard";
import { redirect, RedirectType } from "next/navigation";

export const AccountSettingsPage = async () => {
  const isMobile = await getDevice("mobile");
  const user = await getUser();

  if (!user) {
    redirect(routes.login, RedirectType.replace);
  }

  return (
    <div className="mx-auto w-full max-w-4xl py-16">
      <h1 className="text-center text-3xl font-bold">Account Settings</h1>
      <SectionsCard
        className="mt-10"
        orientation={isMobile ? "vertical" : "horizontal"}
      >
        <Section>
          <UpdateUserInfoForm user={user} />
        </Section>
        <Section>
          <ChangePasswordForm />
        </Section>
      </SectionsCard>
    </div>
  );
};
