import type { Metadata } from "next";

import { raleway, poppins, openSans } from "@font/index";
import "./styles/globals.css";

import AppProviders from "@contexts/index";

import WppButton from "@components/common/button/WppButton";
import ScrollButton from "@components/common/button/ScrollButton";

export const metadata: Metadata = {
  title: "IQ Financials",
  description: `Dados Econômicos, Financeiros e Contábeis, para acadêmicos, 
    gestores e investidores.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="google-site-verification"
          content="PVz5utXiVRiKJBETwDV2bH8cGjcRT_Ij0Nt1EbQwKWQ"
        />
      </head>
      <body
        suppressHydrationWarning={true}
        className={`${raleway.variable} ${poppins.variable} ${openSans.variable} font-sans`}
      >
        <AppProviders>
          {children}
          <ScrollButton />
          <WppButton />
        </AppProviders>
      </body>
    </html>
  );
}
