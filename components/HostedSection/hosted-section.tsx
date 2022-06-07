import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';

const Wrapper = styled.div({
	display: 'flex',
	justifyContent: 'center',
	maxWidth: '1400px',
	width: '100%',
	margin: 'auto',
});

interface Props {
	src: string;
}

export const HostedSection = ({ src }: Props): JSX.Element => {
	return (
		<Wrapper>
			<Image src={src} alt='hosted' height={182} width={800} />
		</Wrapper>
	);
};
