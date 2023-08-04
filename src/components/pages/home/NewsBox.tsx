'use client';
import NewsCard from './NewsCard';
import { useGetArticlesQuery } from '@/redux/services/article/articleApi';
const NewsBox = () => {
	const { data: articlesData, isFetching: postsDataIsFetching } = useGetArticlesQuery({
		params: { pageNumber: 1, pageSize: 6 },
	});

	return (
		<div className="flex w-full flex-col justify-center gap-2">
			{articlesData?.posts.map((newsCardData: any) => {
				return <NewsCard newsCardData={newsCardData} key={newsCardData.id} />;
			})}
		</div>
	);
};

export default NewsBox;
