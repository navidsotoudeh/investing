'use client';
import React, { useState } from 'react';
import Text from '@/components/UIKit/Text';
import Image from 'next/image';
import Link from 'next/link';
//type
import { ArticleInterface } from './ArticleCardInterface';
interface ArticleCardProps {
	articleData: ArticleInterface;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ articleData }) => {
	const checkString = (str: string) => {
		if (str.startsWith('https')) {
			return str;
		} else if (str === 'string') {
			return '/assets/images/logo.png';
		} else {
			return `https://investing-nta8.onrender.com/file/${str}`;
		}
	};
	const [src, setSrc] = useState(checkString(articleData.thumbnail));

	return (
		<Link
			dir="rtl"
			className="flex flex-col border-2 p-2 shadow-amber-50 hover:cursor-pointer"
			href={`/articles/${articleData.id}`}
		>
			<Text variant="h4" htmlTag="h1">
				{articleData.title}
			</Text>
			<div className="flex gap-2">
				<div>
					<Image
						src={src}
						alt="pic"
						width={300}
						height={300}
						onError={() => {
							console.log('30');
							setSrc('/assets/images/logo.png');
						}}
					/>
				</div>
				<div
					className="w-full"
					dangerouslySetInnerHTML={{
						__html: articleData?.htmlContent,
					}}
				/>
			</div>
		</Link>
	);
};

export default ArticleCard;
