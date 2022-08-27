import { CarSearch, Section } from 'components/Elements';
import React from 'react';

interface Props {
	filterCars: (a: string) => {
		label: string;
		value: string;
	}[];
	handleInputChange: (value: string) => void;
	loadOptions: (inputValue: string, state: any) => void;
	setFilterValue: (value: string) => void;
}

export const CarSearchSection = ({
	filterCars,
	handleInputChange,
	loadOptions,
	setFilterValue,
}: Props): JSX.Element => {
	return (
		<Section>
			<CarSearch
				filterCars={filterCars}
				setState={setFilterValue}
				handleInputChange={handleInputChange}
				loadOptions={loadOptions}
			/>
		</Section>
	);
};
