import { ReactNode } from "react";
import "../styles/globals.css";
// import { Poppins } from "next/font/google";
// import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";

// const inter = Inter({ subsets: ["latin"] });
//
// const poppins = Poppins({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });
export const metadata = {
  title: "صفحه ی اصلی",
  description: "ساخته شده توسط تیم abc",
  keywords: "investing" + "سرمایه گذاری" + "بورس" + "رمزارز",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      {/*<body className={`${poppins.className} ${inter.className}`}>*/}
      <body>
        <Header />
        <main className="flex justify-center bg-red-50">{children}</main>
      </body>
    </html>
  );
}
