import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { LenguajeProvider } from "./Providers/LenguajeProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jorge Gonzalez Molina",
  description:
    "Hi, I'm Jorge Alfredo González Molina, a senior web developer with a strong track record in designing and building custom digital solutions. I specialize in creating robust, scalable applications and intuitive user interfaces that drive real value for businesses.",
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
