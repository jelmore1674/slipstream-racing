import styled from '@emotion/styled';
import { usePDF } from '@hooks';
import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

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
	alignItems: 'center',
	bottom: 20,
	color: '#333',
	display: 'flex',
	gap: '3.5rem',
	justifyContent: 'center',
	position: 'absolute',
	width: '100%',
});

const PDFControl = styled.div<{ disabled: boolean }>(({ disabled }) => {
	return {
		alignItems: 'center',
		backgroundColor: '#ccc',
		border: '1px solid black',
		borderRadius: '4px',
		cursor: 'pointer',
		display: 'flex',
		fontWeight: 'bold',
		height: '48px',
		justifyContent: 'center',
		letterSpacing: '0.05rem',
		transition: 'all 0.3s ease-in-out',
		width: '100px',
		'&:hover': {
			backgroundColor: '#eee',
			color: '#000',
			cursor: disabled ? 'not-allowed' : 'pointer',
		},
	};
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
								<PDFControl
									onClick={previousPage}
									disabled={pageNumber === 1}>
									Prev
								</PDFControl>
								<div>
									Page {pageNumber} of {numPages}
								</div>
								<PDFControl
									onClick={nextPage}
									disabled={pageNumber === numPages}>
									Next
								</PDFControl>
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
