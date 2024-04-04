import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import LeftNav from "@/components/LeftNav/LeftNav";
import TopHeader from "@/components/TopHeader";
import PageWrapper from "@/components/PageWrapper";
import { defaultMetadata } from "@/utils/constants";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: ["500", "600", "100", "200", "300", "400", "700", "800", "900"],
  subsets: ["latin"]
});

export const metadata: Metadata = defaultMetadata


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="mainLayout flex max-h-[100dvh] h-[100dvh] justify-between relative overflow-x-hidden text-slate-400 text-sm">
          <LeftNav />

          <section className="grow py-8 md:pb-16 pt-0 overflow-y-auto h-full">
            <TopHeader />
            <PageWrapper>
              {children}
            </PageWrapper>
          </section>
        </main>
      </body>
    </html>
  );
}
