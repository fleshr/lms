import { Header } from "@/widgets/header";

export const MainLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
    </>
  );
};
