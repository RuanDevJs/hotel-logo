import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import { PrimeReactProvider } from 'primereact/api';

import "./globals.css";

import "primereact/resources/primereact.min.css"
import "primereact/resources/themes/lara-light-cyan/theme.css";
import Locale from "./components/Locale";

const fontPoppins = Poppins({
  variable: "--font-poppins",
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  display: "swap"
});


export const metadata: Metadata = {
  title: "Hotel Logo | The Best Place to Rest",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${fontPoppins.variable}`}>
        <PrimeReactProvider value={{ locale: 'pt' }}>
          <Locale>
            {children}
          </Locale>
        </PrimeReactProvider>
      </body>
    </html>
  );
}
