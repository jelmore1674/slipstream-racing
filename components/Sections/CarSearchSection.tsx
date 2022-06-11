import React from 'react';
import { CarSearch, Section } from 'components/Elements';

interface Props {
	handleInputChange: (value: string) => void;
	loadOptions: (inputValue: string, state: any) => void;
	setFilterValue: (value: string) => void;
}

export const CarSearchSection = ({
	handleInputChange,
	loadOptions,
	setFilterValue,
}: Props) => {
	return (
		<Section>
			<CarSearch
				setState={setFilterValue}
				handleInputChange={handleInputChange}
				loadOptions={loadOptions}
			/>
		</Section>
	);
};
