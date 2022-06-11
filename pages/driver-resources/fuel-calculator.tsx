import React from 'react';

const FuelCalculator = () => {
	return (
		<div style={{ height: '100vh' }}>
			<iframe
				style={{ paddingTop: 80 }}
				src='https://acc-fuel-calculator-f55cb.web.app/#/'
				width='100%'
				height='100%'
				frameBorder='0'
			/>
		</div>
	);
};

export default FuelCalculator;
