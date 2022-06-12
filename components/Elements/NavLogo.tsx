import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const NavLogoWrapper = styled.div({
	maxWidth: '60px',
	width: '60px',
});

interface Props {
	src: string;
}

export const NavLogo = ({ src }: Props) => {
	return (
		<Link href='/'>
			<NavLogoWrapper>
				<Image
					src={src}
					width={2000}
					height={2000}
					alt='badge'
					priority
				/>
			</NavLogoWrapper>
		</Link>
	);
};
