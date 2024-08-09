import type {Metadata} from "next";
import {Providers} from "./providers";
import "./globals.css";
import ThemeSwitcher from "./ui/theme-switcher";

export const metadata: Metadata = {
   title: "itzramn",
   description: "itzramn's personal website",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en" className="dark">
         <body className="bg-background">
            <Providers>
               {children}
               <div className="absolute bottom-2 right-2 md:bottom-6 md:right-6">
                  <ThemeSwitcher />
               </div>
            </Providers>
         </body>
      </html>
   );
}
