import { Footer } from "@/shared/ui/Footer";
import { Toaster } from "@/shared/ui/Sonner";
import { Wrapper } from "@/shared/ui/Wrapper";
import { type Metadata } from "next";
import { geist } from "../styles/fonts";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "LMS",
    template: "%s | LMS",
  },
};

export const RootLayout = (props: LayoutProps<"/">) => {
  const { children } = props;

  return (
    <html className="h-full" lang="en">
      <body className={`${geist.variable} h-full font-sans antialiased`}>
        <Wrapper className="flex min-h-full flex-col">
          {children}
          <Footer />
        </Wrapper>
        <Toaster position="top-center" />
      </body>
    </html>
  );
};
