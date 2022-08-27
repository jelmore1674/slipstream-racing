import {
	EngineMapCell,
	EngineMapRow as EngineMapRowWrapper,
} from 'components/Elements';
import React from 'react';

interface Props {
	cell1: string;
	cell2: string;
	heading?: boolean;
}

export const EngineMapRow = ({ cell1, cell2, heading }: Props): JSX.Element => {
	return (
		<EngineMapRowWrapper>
			<EngineMapCell width='25%' heading={heading}>
				{cell1}
			</EngineMapCell>
			<EngineMapCell width='75%' heading={heading}>
				{cell2}
			</EngineMapCell>
		</EngineMapRowWrapper>
	);
};
