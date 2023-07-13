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
        <main className="flex items-center justify-center bg-red-50 w-full">
          <div className="w-4/5 bg-green-400">{children}</div>
        </main>
      </body>
    </html>
  );
}
