import { SimpleHeader } from "@/shared/ui/SimpleHeader";

export const AuthLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <>
      <SimpleHeader />
      <main className="flex flex-1 items-center justify-center py-16">
        {children}
      </main>
    </>
  );
};
