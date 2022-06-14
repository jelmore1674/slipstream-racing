interface EngineMapCondition {
	mapNumber: string;
	description: string;
}

interface EngineMaps {
	dry?: EngineMapCondition[];
	wet?: EngineMapCondition[];
	damp?: EngineMapCondition[];
	paceCar?: EngineMapCondition[];
}

export interface EngineMapData {
	carName: string;
	engineMaps: EngineMaps;
}

export interface ThemeProps {
	colors: {
		primary?: string;
		secondary?: string;
		dry?: string;
		wet?: string;
		damp?: string;
		paceCar?: string;
	};
}

export interface SeoData {
	title: string;
	description: string;
	url: string;
	featuredImg?: string;
}
