import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Text from '@/components/UIKit/Text';
const NewsCard = ({ newsCardData }: any) => {
	const checkString = (str: string) => {
		if (str.startsWith('https')) {
			return str;
		} else if (str === 'string') {
			return '/assets/images/logo.png';
		} else {
			return `https://investing-nta8.onrender.com/file/${str}`;
		}
	};
	const [src, setSrc] = useState(checkString(newsCardData?.thumbnail));

	return (
		<Link className="flex w-full justify-between border-b-2 py-2" dir="rtl" href={`/articles/${newsCardData.id}`}>
			<main className="flex w-2/3 flex-col justify-between text-right">
				<Text variant="subtitle1" htmlTag="p" className="text-base text-black">
					{newsCardData?.title}
				</Text>
				<Text variant="caption2" htmlTag="span" className="text-justify text-sm">
					{newsCardData?.content}
				</Text>
				<Text htmlTag="span" variant="body3">
					ادامه ی مطلب
				</Text>
			</main>
			<div className="h-full w-1/3">
				<Image
					className="mx-auto rounded-xl shadow-black drop-shadow-xl"
					src={src}
					width={200}
					height={200}
					alt="image"
					priority={true}
					onError={() => {
						console.log('30');
						setSrc('/assets/images/logo.png');
					}}
				/>
			</div>
		</Link>
	);
};

export default NewsCard;
