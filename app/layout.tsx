"use client";

import { reset } from "@/styles/reset";
import { Global } from "@emotion/react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <meta name="useHook" content="커스텀 훅 / 컴포넌트 모음" />
      <body className={inter.className}>
        <Global styles={reset} />
        {children}
      </body>
    </html>
  );
}
