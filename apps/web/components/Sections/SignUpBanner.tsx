import { SIMRACINGGP_URL } from '@data';
import { CTAButton, Section } from '../Elements';
import styled from '@emotion/styled';

const BannerSection = styled(Section)({
	borderRadius: '4px',
});

const Wrapper = styled.div({
	alignItems: 'center',
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',
	justifyContent: 'center',
});

const P = styled.p({
	fontSize: '32px',
	fontWeight: 'bold',
});

export const SignUpBanner = () => {
	return (
		<BannerSection backgroundColor='#aaa'>
			<Wrapper>
				<P>
					Looking for a league on ACC? Come join us on Saturdays at
					6:30pm EST/ 23:30 UTC
				</P>

				<P>Sign Up on SimRacing.GP Today!</P>
				<CTAButton
					href={SIMRACINGGP_URL}
					target='_blank'
					style={{ width: '100%' }}>
					Sign Up
				</CTAButton>
			</Wrapper>
		</BannerSection>
	);
};
