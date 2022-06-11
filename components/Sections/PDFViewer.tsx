import React from 'react';
import styled from '@emotion/styled';
import { Document, Outline, Page, pdfjs } from 'react-pdf';
import { usePDF } from '@hooks';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

const PDFDocumentWrapper = styled.div`
	margin: 0 auto;
	max-width: 1400px;
	padding-inline: 2rem;

	canvas {
		width: 100% !important;
		height: auto !important;
		transition: all 0.3s ease-in-out;
	}
`;

const PDFContainer = styled.div({
	position: 'relative',
});

const PDFControlsWrapper = styled.div({
	color: 'green',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	bottom: 20,
	position: 'absolute',
	width: '100%',
	gap: '3.5rem',
});

interface Props {
	pdf: string;
	singlePage?: boolean;
}

export const PDFViewer = ({ pdf, singlePage }: Props) => {
	const {
		onDocumentLoadSuccess,
		numPages,
		pageNumber,
		previousPage,
		nextPage,
	} = usePDF();

	return (
		<PDFDocumentWrapper>
			<Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
				{singlePage ? (
					<>
						<PDFContainer>
							<Page pageNumber={pageNumber} />
							<PDFControlsWrapper>
								<div onClick={previousPage}>Prev</div>
								<div>
									Page {pageNumber} of {numPages}
								</div>
								<div onClick={nextPage}>Next</div>
							</PDFControlsWrapper>
						</PDFContainer>
					</>
				) : (
					Array.from(new Array(numPages), (el, index) => (
						<Page
							className='pdf-page'
							key={`page_${index + 1}`}
							pageNumber={index + 1}
							width={800}
						/>
					))
				)}
			</Document>
		</PDFDocumentWrapper>
	);
};
