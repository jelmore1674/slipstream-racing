import dynamic from 'next/dynamic';
import React from 'react';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface Props {
	url: string;
}

export const VideoPlayer = ({ url }: Props): JSX.Element => {
	return (
		<ReactPlayer
			className='react-player'
			controls={true}
			height={'100%'}
			url={url}
			width={'100%'}
		/>
	);
};
