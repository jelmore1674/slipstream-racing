import { useState } from 'react';

export const usePDF = () => {
	const [numPages, setNumPages] = useState<null | number>(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }: any) {
		setNumPages(numPages);
	}

	function changePage(offset: number) {
		setPageNumber((prevPageNumber) => {
			const nextPageNumber = prevPageNumber + offset;
			if (nextPageNumber >= 1 && nextPageNumber <= numPages!) {
				window.scroll(0, window.scrollY - 850);
				return nextPageNumber;
			}
			return prevPageNumber;
		});
	}

	function previousPage() {
		changePage(-1);
	}

	function nextPage() {
		changePage(1);
	}

	return {
		numPages,
		pageNumber,
		onDocumentLoadSuccess,
		previousPage,
		nextPage,
	};
};
