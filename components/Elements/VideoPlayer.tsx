import React from 'react';
import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

interface Props {
	url: string;
}

export const VideoPlayer: React.FC<Props> = ({ url }) => {
	return (
		<ReactPlayer
			className='react-player'
			url={url}
			controls={true}
			width={'100%'}
			height={'100%'}
		/>
	);
};
