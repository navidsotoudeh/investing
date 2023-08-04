import { FaChevronRight } from 'react-icons/fa';
import { usePagination, DOTS } from './usePagination';

// @ts-ignore
const Pagination = (props) => {
	const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize,
	});

	if (currentPage === 0 || (paginationRange?.length ?? 1) < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	const lastPage = paginationRange?.length ? paginationRange[paginationRange?.length - 1] : 1;
	return (
		<ul className={`pagination-container mt-5`}>
			<li
				className={` pagination-item
      ${currentPage === 1 && 'disabled'}`}
				onClick={onPrevious}
			>
				<div className="arrow left">
					<FaChevronRight />
				</div>
			</li>
			{paginationRange?.map((pageNumber, index) => {
				if (pageNumber === DOTS) {
					return (
						<li key={index} className="pagination-item dots">
							&#8230;
						</li>
					);
				}

				return (
					<li
						key={index}
						className={`  pagination-item ${pageNumber === currentPage && 'selected'}`}
						onClick={() => onPageChange(pageNumber)}
					>
						{pageNumber}
					</li>
				);
			})}
			<li className={`pagination-item ${currentPage === lastPage && 'disabled'}`} onClick={onNext}>
				<div className="arrow right">
					<span className="rotate-180">
						<FaChevronRight />
					</span>
				</div>
			</li>
		</ul>
	);
};

export default Pagination;
