import { DISCORD_URL, SIMRACINGGP_URL } from '@data';
import styled from '@emotion/styled';
import {
	ButtonGrid,
	Column,
	CTAButton,
	Heading,
	Section,
	VideoPlayer,
} from 'components/Elements';
import { openInNewTab } from 'lib/helperFunctions';
import React from 'react';
import { SiDiscord } from 'react-icons/si';

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
					<CTAButton
						color='#5865F2'
						onClick={() => openInNewTab(DISCORD_URL)}>
						Discord <SiDiscord />
					</CTAButton>
					<CTAButton onClick={() => openInNewTab(SIMRACINGGP_URL)}>
						Sign Up
					</CTAButton>
				</ButtonGrid>
			</Column>
			<Column>
				<VideoPlayer url={youtubeLink} />
			</Column>
		</Section>
	);
};
