import type { Metadata } from "next";

import { raleway, poppins, openSans } from "@font/index";
import "./styles/globals.css";

import AppProviders from "@contexts/index";

import WppButton from "@components/common/button/WppButton";
import ScrollButton from "@components/common/button/ScrollButton";

export const metadata: Metadata = {
  title: "IQ Financials - Dados Econômicos e Financeiros",
  icons: {
    icon: "/favicon.ico",
  },
  description: `Dados econômicos, financeiros e contábeis confiáveis para acadêmicos, 
    gestores e investidores tomarem decisões estratégicas com segurança.`,
  keywords:
    "dados financeiros, economia, contabilidade, investimentos, análise econômica, gestão financeira",
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
        <meta name="robots" content="index, follow" />
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
