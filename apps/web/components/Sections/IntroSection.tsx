import { DISCORD_URL, SIMRACINGGP_URL } from '@data';
import {
	ButtonGrid,
	Column,
	CTAButton,
	Heading,
	Section,
	VideoPlayer,
} from 'components/Elements';
import React from 'react';
import { SiDiscord } from 'react-icons/si';
import { theme } from 'styles/global';
import { CmsRenderer } from './CmsRenderer';

interface Props {
	copy: string;
	youtubeLink: string;
}

export const IntroSection = ({ copy, youtubeLink }: Props): JSX.Element => {
	return (
		<Section>
			<Column>
				<Heading>Slipstream Racing</Heading>
				<CmsRenderer document={copy} />
				<ButtonGrid grid={'100px'}>
					<CTAButton
						href={DISCORD_URL}
						target={'_blank'}
						color={theme.colors.discord}>
						Discord <SiDiscord />
					</CTAButton>
					<CTAButton href={SIMRACINGGP_URL} target={'_blank'}>
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
