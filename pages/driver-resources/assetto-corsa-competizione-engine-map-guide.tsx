import { PageHeading } from 'components/Elements';
import { CarSearchSection, EngineMapTableSection } from 'components/Sections';
import { engineMapData } from 'data/engineMapData';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { EngineMapData, SeoData } from 'types';

const filterCars = (value) => {
	const filteredCars = engineMapData
		.filter((item) => {
			return item.carName.toLowerCase().includes(value.toLowerCase());
		})
		.slice(0, 4);

	return filteredCars.map((item) => {
		return {
			label: item.carName,
			value: item.carName,
		};
	});
};

const loadOptions = (inputValue, callback) => {
	setTimeout(() => {
		callback(filterCars(inputValue));
	}, 500);
};

const seoData = {
	url: 'https://slipstreamracing.net/driver-resources/assetto-corsa-competizione-engine-map-guide',
	title: 'ACC Engine Map Guide | Slipstream Racing',
	description:
		'Trying to find the best engine for your car in ACC? Check out our ACC Engine Map Guide!',
};
interface Props {
	data: EngineMapData[];
	seoData: SeoData;
}

const ACCEngineMapGuide = ({ data, seoData }: Props) => {
	const [value, setValue] = React.useState('');
	const [filterValue, setFilterValue] = React.useState('');

	const { url, title, description } = seoData;

	const handleInputChange = (newValue: string) => {
		const inputValue = newValue.replace(/\W/g, '');
		setValue(inputValue);
		return inputValue;
	};
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta property='og:title' content={title} key='ogtitle' />
				<meta property='og:url' content={url} key='ogurl' />
				<meta name='description' content={description} />
				<meta property='og:title' content={title} key='ogtitle' />
				<meta
					property='og:description'
					content={description}
					key='ogdesc'
				/>
			</Head>
			<PageHeading>ACC Engine Map Guide</PageHeading>
			<CarSearchSection
				handleInputChange={handleInputChange}
				loadOptions={loadOptions}
				setFilterValue={setFilterValue}
			/>
			{data
				.filter((item) => {
					return item.carName
						.toLowerCase()
						.includes(filterValue.toLowerCase());
				})
				.map((item: any, i: number) => {
					return <EngineMapTableSection key={i} data={item} />;
				})}
		</Fragment>
	);
};

export default ACCEngineMapGuide;

export const getStaticProps = () => {
	return {
		props: {
			data: engineMapData,
			seoData,
		},
	};
};
