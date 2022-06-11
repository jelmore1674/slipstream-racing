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
			controls={true}
			height={'100%'}
			url={url}
			width={'100%'}
		/>
	);
};
