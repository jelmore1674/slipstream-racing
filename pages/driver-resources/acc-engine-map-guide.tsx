import React from 'react';
import styled from '@emotion/styled';
import { engineMapData } from 'data/engineMapData';

const ACCEngineMapGuide = ({ data }: any) => {
	const [value, setValue] = React.useState('');
	let carData = data;
	return (
		<div style={{ paddingTop: 100 }}>
			<input value={value} onChange={(e) => setValue(e.target.value)} />
			ACCEngineMapGuide
			{data
				.filter((item: any) => {
					return item.carName
						.toLowerCase()
						.includes(value.toLowerCase());
				})
				.map((item: any, i: number) => {
					return (
						<div key={i} style={{ padding: '2rem' }}>
							{item.carName}
						</div>
					);
				})}
		</div>
	);
};

export default ACCEngineMapGuide;

export const getStaticProps = () => {
	return {
		props: {
			data: engineMapData,
		},
	};
};
