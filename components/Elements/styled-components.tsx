import styled from '@emotion/styled';

export const CTAButton = styled.button<any>((p) => {
	const { color } = p;
	let backgroundColor = !color ? p.theme.colors.primary : color;
	return {
		backgroundColor,
		border: '3px solid transparent',
		borderRadius: '4px',
		color: 'white',
		cursor: 'pointer',
		display: 'flex',
		fontSize: '1rem',
		fontWeight: 'bold',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '0.5rem 1rem',
		gap: '0.5rem',
		transition: 'all 0.3s ease-in-out',
		'&:hover': {
			backgroundColor: '#ffffff',
			color: backgroundColor,
		},
	};
});

export const DownloadButton = styled.a<any>((p) => {
	const { color } = p;
	let backgroundColor = !color ? p.theme.colors.primary : color;
	return {
		backgroundColor,
		border: '3px solid transparent',
		borderRadius: '4px',
		color: 'white',
		cursor: 'pointer',
		display: 'flex',
		fontSize: '1rem',
		fontWeight: 'bold',
		justifyContent: 'center',
		alignItems: 'center',
		padding: '0.5rem 1rem',
		gap: '0.5rem',
		transition: 'all 0.3s ease-in-out',
		'&:hover': {
			backgroundColor: '#ffffff',
			color: backgroundColor,
		},
	};
});

export const ButtonGrid = styled.div<any>(({ grid }) => {
	return {
		display: 'grid',
		gridTemplateColumns: `repeat(auto-fit,minmax(${grid}, 1fr))`,
		gridTemplateRows: 'auto',
		gap: '1rem',
		width: '100%',
	};
});

interface SectionProps {
	theme?: {
		colors: {
			primary: string;
			secondary: string;
		};
	};
	grid?: string;
}

export const Section = styled.section((p: SectionProps) => {
	const { grid } = p;
	const { primary, secondary } = p.theme!.colors;
	return {
		justifyItems: 'center',
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

export const PageHeading = styled.h1((p) => {
	return {
		fontSize: '3rem',
		fontWeight: 'bold',
		margin: '0',
		padding: '1rem 0',
		paddingTop: 100,
		textAlign: 'center',
	};
});

export const IFrame = styled.iframe<any>((p) => {
	return {
		backgroundColor: '#ffffff',
		border: 'none',
		height: '100%',
		width: '100%',
	};
});
