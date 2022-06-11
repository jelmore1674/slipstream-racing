import { CarSearchSection, EngineMapTableSection } from 'components/Sections';
import { engineMapData } from 'data/engineMapData';
import React from 'react';
import { EngineMapData } from 'types';

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
	}, 1000);
};

interface Props {
	data: EngineMapData[];
}

const ACCEngineMapGuide = ({ data }: Props) => {
	const [value, setValue] = React.useState('');
	const [filterValue, setFilterValue] = React.useState('');

	const handleInputChange = (newValue: string) => {
		const inputValue = newValue.replace(/\W/g, '');
		setValue(inputValue);
		return inputValue;
	};
	return (
		<div style={{ paddingTop: 100 }}>
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
