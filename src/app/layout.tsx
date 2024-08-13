"use client";

import Layout from "@/components/Layout";
import StyledComponentsRegistry from "./registery";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <StyledComponentsRegistry>
        <body>
          <Layout>
            <main>{children}</main>
          </Layout>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
