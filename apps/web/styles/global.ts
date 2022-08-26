import { css } from '@emotion/react';
export const theme = {
	colors: {
		primary: '#bd3039',
		secondary: '#f7f7f7',
		dry: '#108820',
		wet: '#0a64ad',
		damp: '#8c49a4',
		paceCar: '#b12323',
	},
};

export const globalStyles = css`
	* {
		box-sizing: border-box;
	}
	html,
	body {
		background-color: #333;
		color: white;
		font-family: 'Roboto', sans-serif;
		font-size: 14px;
		margin: 0;
		padding: 0;
		scroll-behavior: smooth;
	}

	@media (min-width: 768px) {
		html,
		body {
			font-size: 18px;
		}
	}

	a {
		color: inherit;
		text-decoration: none;
	}

	ol {
		margin: 0;
		padding: 0 2rem;
		line-height: 1.75rem;
	}

	ol li {
		margin: 1rem 0;
	}

	.player-wrapper {
		position: relative;
		padding-top: 56.25%; /* 720 / 1280 = 0.5625 */
	}

	.react-player {
		/* position: absolute;
		top: 0;
		left: 0; */

		height: auto !important;
		aspect-ratio: 16/9;
	}

	.pdf-page {
		margin: 1rem auto;
	}

	@keyframes shift {
		from {
			color: inherit;
		}
		to {
			color: ${theme.colors.primary};
		}
	}
`;
