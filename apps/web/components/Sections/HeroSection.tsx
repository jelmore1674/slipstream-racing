import styled from '@emotion/styled';
import { HeroLogo } from '../Elements';
import React from 'react';

const HeroWrapper = styled.div<{ src: string }>(({ src }) => ({
	backgroundAttachment: 'fixed',
	backgroundImage: `url(${src})`,
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '100vh',
	width: '100vw',
	'@media (max-width: 768px)': {
		backgroundAttachment: 'scroll',
		height: '100%',
		padding: '0 1rem',
	},
}));

interface Props {
	backgroundImage: string;
}

export const HeroSection = ({ backgroundImage }: Props): JSX.Element => {
	return (
		<HeroWrapper src={backgroundImage}>
			<HeroLogo />
		</HeroWrapper>
	);
};
