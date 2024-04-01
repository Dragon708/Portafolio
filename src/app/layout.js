import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { LenguajeProvider } from "./Providers/LenguajeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jorge Gonzalez Portfolio",
  description:
    "I am a web developer with 2 years of experience, I enjoy transforming ideas into elegant, functional websites. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      <body className={inter.className}>
        <Providers>
          <LenguajeProvider>{children}</LenguajeProvider>
        </Providers>
      </body>
    </html>
  );
}
