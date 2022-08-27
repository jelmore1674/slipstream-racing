import React from 'react';
import AsyncSelect from 'react-select/async';

const customStyles = {
	dropdownIndicator: (base) => ({
		...base,
		display: 'none',
	}),

	indicatorSeparator: (base) => ({
		...base,
		display: 'none',
	}),

	container: (base) => ({
		...base,
		width: '100%',
	}),

	control: (base, state) => {
		return {
			...base,
			backgroundColor: '333333',
			borderRadius: '4px',
			paddding: '0.5rem',
			paddingLeft: '1rem',
		};
	},
	input: (base) => ({
		...base,
		borderRadius: '4px',
		color: '#fafafa',
		fontSize: '1.5rem',
		fontWeight: 'bold',
		outline: 'none',
		'&::placeholder': {
			color: '#fafafa40',
			fontSize: '1.5rem',
			fontWeight: 'bold',
			paddingLeft: '1rem',
			width: '100%',
		},
	}),

	menu: (base) => ({
		...base,
		backgroundColor: '#222222',
		borderRadius: '4px',
		padding: '0.5rem',
		width: '100%',
	}),

	option: (provided, state) => {
		return {
			...provided,
			backgroundColor: state.isFocused ? '#fafafa' : '#222222',
			color: state.isFocused ? '#333333' : 'white',
		};
	},
};

interface Props {
	filterCars: (a: string) => {
		label: string;
		value: string;
	}[];
	handleInputChange: (value: string) => void;
	loadOptions: (inputValue: string, state: any) => void;
	setState: (value: any) => void;
}

export const CarSearch = ({
	filterCars,
	handleInputChange,
	loadOptions,
	setState,
}: Props): JSX.Element => {
	return (
		<>
			<AsyncSelect
				defaultOptions={filterCars('')}
				id='car-search'
				instanceId='car-search'
				getOptionValue={(option: any) => {
					if (option) {
						return option.value;
					}
				}}
				isClearable
				isSearchable
				loadOptions={loadOptions}
				onChange={(option: any) => {
					if (option) {
						setState(option.value);
					}
				}}
				onInputChange={handleInputChange}
				placeholder='Search for a car'
				styles={customStyles}
			/>
		</>
	);
};
