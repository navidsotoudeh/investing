'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

//redux
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { selectIsAuthenticated } from '@/redux/slices/auth/authSlice';
import { logOut } from '@/redux/slices/auth/authSlice';

//component
import Text from '../../components/UIKit/Text/Text';

//icons
import { FaHome } from 'react-icons/fa';
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
	//instance
	const dispatch = useAppDispatch();
	const router = useRouter();
	//selectors
	const isAuthenticated = useAppSelector(selectIsAuthenticated);

	//states
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<header className="flex justify-start bg-[#232735] p-4 text-white" dir="rtl">
			<div className="flex w-11/12 items-center gap-4">
				<div className="">
					<FaHome />
				</div>
				<Text variant="body2" htmlTag="span">
					<Link href="/stock-market" className="font-mainFa ">
						بورس
					</Link>
				</Text>
				<Text variant="body2" htmlTag="span">
					<Link href="/cryptocurrency">رمزارز</Link>
				</Text>
				<Text variant="body2" htmlTag="span">
					<Link href="/about-us/team-members">اعضای تیم</Link>
				</Text>
				<Text variant="body2" htmlTag="span">
					<Link href="/articles">مقالات</Link>
				</Text>
				<Text variant="body2" htmlTag="span">
					<Link href="/contact-us">تماس با ما</Link>
				</Text>
				<Text variant="body2" htmlTag="span">
					<Link href="/about-us">درباره‌ی ما</Link>
				</Text>
			</div>
			<div
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
				className="relative flex pr-[60px]"
			>
				<Link href={'profile'} className="w-1/12 justify-self-end">
					<FaUserCircle size={24} color="white" />
				</Link>
				<>
					{isAuthenticated ? (
						<Text
							className={`absolute left-[30px] flex w-[100px] items-center justify-center rounded-xl bg-gray-100 py-4 text-black hover:cursor-pointer ${
								showTooltip ? 'block' : 'hidden'
							}`}
							onClick={() => dispatch(logOut())}
							htmlTag="h2"
							variant="body2"
						>
							خروج
						</Text>
					) : (
						<Text
							onClick={() => router.push('/profile')}
							className={`absolute left-[30px] flex w-[100px] items-center justify-center rounded-xl bg-gray-100 py-4 text-black hover:cursor-pointer ${
								showTooltip ? 'block' : 'hidden'
							}`}
							htmlTag="h2"
							variant="body2"
						>
							ورود
						</Text>
					)}
				</>
			</div>
		</header>
	);
};
export default Header;
