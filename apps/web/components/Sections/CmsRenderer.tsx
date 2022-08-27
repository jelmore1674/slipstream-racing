import {
	DocumentRenderer,
	DocumentRendererProps,
} from '@keystone-6/document-renderer';
import styled from '@emotion/styled';

const Content = styled.p({
	fontSize: '1rem',
	fontWeight: 'normal',
	lineHeight: '1.6rem',
	margin: '1rem 0',
	textAlign: 'left',
	width: '600px',
	'@media(max-width: 1220px)': {
		maxWidth: '100%',
		width: '100%',
	},
});

const renderers: DocumentRendererProps['renderers'] = {
	// use your editor's autocomplete to see what other renderers you can override
	inline: {
		bold: ({ children }) => {
			return <strong>{children}</strong>;
		},
	},
	block: {
		paragraph: ({ children, textAlign }) => {
			return <Content style={{ textAlign }}>{children}</Content>;
		},
	},
};

export const CmsRenderer = ({ document }) => {
	return <DocumentRenderer document={document} renderers={renderers} />;
};
