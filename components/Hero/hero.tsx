import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const HeroWrapper = styled.div(({ src }: any) => ({
	backgroundAttachment: 'fixed',
	backgroundImage: `url(${src})`,
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
	height: '100vh',
	width: '100vw',
}));

const LogoContainer = styled.div({
	maxWidth: '1400px',
	width: '100%',
	position: 'relative',
	margin: 'auto',
});

const Logo = styled.div({
	position: 'absolute',
	top: '10px',
	right: '2rem',
	'@media (min-width: 1460px)': {
		right: '-2rem',
	},
	'@media (max-width: 768px)': {
		padding: '3rem',
		position: 'static',
	},
});

const logoPath =
	'http://jelmoreassets.nyc3.cdn.digitaloceanspaces.com/SlipstreamRacing/Home/logo.png';

interface Props {
	backgroundImage: string;
}

export const Hero = ({ backgroundImage }: Props): JSX.Element => {
	return (
		<HeroWrapper src={backgroundImage}>
			<LogoContainer>
				<Logo>
					<Image src={logoPath} alt='logo' height={432} width={768} />
				</Logo>
			</LogoContainer>
		</HeroWrapper>
	);
};
