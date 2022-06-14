import styled from '@emotion/styled';
import { ThemeProps } from '../../types';

export const CTAButton = styled.a<{
	color?: string;
	theme?: ThemeProps;
}>((p) => {
	const { color } = p;
	let backgroundColor = !color ? p.theme.colors.primary : color;
	return {
		alignItems: 'center',
		backgroundColor,
		border: '3px solid transparent',
		borderRadius: '4px',
		color: 'white',
		cursor: 'pointer',
		display: 'flex',
		fontSize: '1rem',
		fontWeight: 'bold',
		gap: '0.5rem',
		justifyContent: 'center',
		padding: '0.5rem 1rem',
		transition: 'all 0.3s ease-in-out',
		'&:hover': {
			backgroundColor: '#ffffff',
			color: backgroundColor,
		},
	};
});

export const DownloadButton = styled.a<{
	color?: string;
	theme?: ThemeProps;
}>((p) => {
	const { color } = p;
	let backgroundColor = !color ? p.theme.colors.primary : color;
	return {
		alignItems: 'center',
		backgroundColor,
		border: '3px solid transparent',
		borderRadius: '4px',
		color: 'white',
		cursor: 'pointer',
		display: 'flex',
		fontSize: '1rem',
		fontWeight: 'bold',
		gap: '0.5rem',
		justifyContent: 'center',
		padding: '0.5rem 1rem',
		transition: 'all 0.3s ease-in-out',
		'&:hover': {
			backgroundColor: '#ffffff',
			color: backgroundColor,
		},
	};
});

export const ButtonGrid = styled.div<{ grid: string | number }>(({ grid }) => {
	return {
		display: 'grid',
		gap: '1rem',
		gridTemplateColumns: `repeat(auto-fit,minmax(${grid}, 1fr))`,
		gridTemplateRows: 'auto',
		width: '100%',
	};
});

interface SectionProps {
	theme?: ThemeProps;
	grid?: string;
}

export const Section = styled.section((p: SectionProps) => {
	const { grid } = p;
	const { primary, secondary } = p.theme!.colors;
	return {
		display: 'grid',
		gap: '1rem',
		gridTemplateColumns: `repeat(auto-fit, minmax(${
			grid ? grid : '600'
		}px, 1fr))`,
		gridTemplateRows: 'auto',
		height: '100%',
		margin: 'auto',
		maxWidth: '1400px',
		padding: '2rem',
		'@media(max-width: 1220px)': {
			gridTemplateColumns: '100%',
		},
	};
});

export const PageHeading = styled.h1({
	fontSize: '3rem',
	fontWeight: 'bold',
	margin: '0',
	padding: '1rem 0',
	textAlign: 'center',
});

export const IFrame = styled.iframe({
	backgroundColor: '#ffffff',
	border: 'none',
	width: '100%',
});

export const EngineMapCell = styled.div(
	(p: { heading?: boolean; width?: string }) => {
		const { width, heading } = p;
		return {
			alignItems: 'center',
			border: '1px solid white',
			display: 'flex',
			fontSize: heading ? '1.5rem' : '1rem',
			fontWeight: heading ? 'bold' : 'normal',
			justifyContent: 'center',
			padding: '1rem',
			textAlign: 'center',
			width: width,
		};
	}
);

export const EngineMapTableHeader = styled.h3({
	fontSize: '1.5rem',
	margin: '1.5rem 0',
	textTransform: 'capitalize',
});

export const EngineMapRow = styled.div({
	display: 'flex',
	flexDirection: 'row',
});

export const EngineMapTable = styled.div<{
	engineMapType: string;
	theme?: ThemeProps;
}>((p) => {
	const { engineMapType } = p;
	return {
		backgroundColor: p.theme.colors[engineMapType],
		borderRadius: '5px',
		width: '100%',
	};
});

export const Heading = styled.h1({
	fontSize: '3rem',
	fontWeight: 'bold',
	margin: '0',
	textAlign: 'left',
});

export const Column = styled.div({
	width: 'calc(100% - 2rem)',
	'@media(max-width: 1220px)': {
		width: '100%',
	},
});
