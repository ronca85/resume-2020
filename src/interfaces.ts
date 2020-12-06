// after we define these interfaces go back to schema,ts and define sources in the typegenAutoConfig

export interface BioInterface {
	name:      string,
	tagline:   string,
	email:     string,
	objective: string,
	website:   string,
	github:    string,
	linkedin:  string,
}

export interface PositionInterface {
	id: string,
	title: string,
	company: string,
	startDate: string,
	endDate?: string,
	employmentType: string,
	location: string,
	achievements: string[],
}
