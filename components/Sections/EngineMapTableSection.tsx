import { EngineMapData } from '@types';
import {
	EngineMapTable,
	EngineMapTableHeader,
	Section,
} from 'components/Elements';
import React, { Fragment } from 'react';
import { EngineMapRow } from '../Blocks';

interface Props {
	data: EngineMapData;
}

export const EngineMapTableSection = ({ data }: Props): JSX.Element => {
	const { carName, engineMaps } = data;
	return (
		<Section grid='1200'>
			<h2>{carName}</h2>
			{Object.keys(engineMaps).map((condition: string, i: number) => {
				return (
					<Fragment key={i}>
						<EngineMapTableHeader>
							{condition.replace(/([A-Z])/g, ' $1')}
						</EngineMapTableHeader>
						<EngineMapTable engineMapType={condition}>
							<EngineMapRow
								cell1='Engine Map'
								cell2='Description'
								heading
							/>
							{engineMaps[condition].map(
								(engineMap: any, i: number) => {
									return (
										<EngineMapRow
											cell1={engineMap.mapNumber}
											cell2={engineMap.description}
											key={i}
										/>
									);
								}
							)}
						</EngineMapTable>
					</Fragment>
				);
			})}
		</Section>
	);
};
