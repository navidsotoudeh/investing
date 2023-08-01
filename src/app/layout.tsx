import { ReactNode } from "react";
import "../styles/globals.css";
// import { Poppins } from "next/font/google";
// import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/Footer/Footer";

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
        <Providers>
          <Header />
          <main className="flex items-center justify-center w-full">
            <div className="w-4/5">{children}</div>
          </main>
          <Footer />
        </Providers>
        <ToastContainer />
      </body>
    </html>
  );
}
