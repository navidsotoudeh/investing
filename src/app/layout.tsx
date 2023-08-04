import { ReactNode } from 'react';
// import { Poppins } from "next/font/google";
// import { Inter } from "next/font/google";
import Header from '@/components/Header/Header';
import { Providers } from '@/redux/provider';
import { ToastContainer } from 'react-toastify';

//component
import Footer from '@/components/Footer/Footer';
import Head from './head';

//css
import '../styles/globals.css';

// const inter = Inter({ subsets: ["latin"] });
//
// const poppins = Poppins({
//   weight: ["400", "700"],
//   subsets: ["latin"],
// });
export const metadata = {
	title: 'صفحه ی اصلی',
	description: 'ساخته شده توسط تیم abc',
	keywords: 'investing' + 'سرمایه گذاری' + 'بورس' + 'رمزارز',
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<Head />
			<body>
				<Providers>
					<Header />
					<main dir="rtl" className="flex min-h-screen px-20 py-2">
						{children}
					</main>
					<Footer />
					<ToastContainer />
				</Providers>
			</body>
		</html>
	);
}
