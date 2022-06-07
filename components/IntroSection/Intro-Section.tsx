import React from 'react';
import styled from '@emotion/styled';
import { SiDiscord } from 'react-icons/si';
import {
	ButtonGrid,
	CTAButton,
	Section,
	VideoPlayer,
} from 'components/Elements';

const Heading = styled.h1({
	fontSize: '3rem',
	fontWeight: 'bold',
	margin: '0',
	textAlign: 'left',
});

const Content = styled.p({
	fontSize: '1rem',
	lineHeight: '1.6rem',
	fontWeight: 'normal',
	margin: '1rem 0',
	textAlign: 'left',
	width: '600px',
	'@media(max-width: 1220px)': {
		maxWidth: '100%',
		width: '100%',
	},
});

const Column = styled.div({
	width: '100%',
	margin: 'auto',
	padding: '2rem',
});

interface Props {
	copy: string;
	youtubeLink: string;
}

export const IntroSection = ({ copy, youtubeLink }: Props): JSX.Element => {
	return (
		<Section>
			<Column>
				<Heading>Slipstream Racing</Heading>
				<Content dangerouslySetInnerHTML={{ __html: copy }} />
				<ButtonGrid grid={'100px'}>
					<CTAButton color='#5865F2'>
						Discord <SiDiscord />
					</CTAButton>
					<CTAButton>Sign Up</CTAButton>
				</ButtonGrid>
			</Column>
			<Column>
				<VideoPlayer url={youtubeLink} />
			</Column>
		</Section>
	);
};
