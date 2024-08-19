"use client";

import StyledComponentsRegistry from "./registery";
import { Poppins } from "next/font/google";
import GlobalStyle from "@/styles/globalStyles";

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
      <GlobalStyle />
      <StyledComponentsRegistry>
        <body>
          <main>{children}</main>
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
