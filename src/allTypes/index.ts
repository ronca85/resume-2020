import { decorateType } from "@nexus/schema";
import { GraphQLDate, GraphQLURL } from 'graphql-scalars'

// after exporting the new data types go to schema.ts and set it up there, in the makeSchema object
// create a generated folder for nexus to use to src/generated all the data types we need

export const GQLDate = decorateType( GraphQLDate, {
	rootTyping: "Date",
	asNexusMethod: "date",
})

export const GQLURL = decorateType( GraphQLURL, {
	rootTyping: "URL",
	asNexusMethod: "url",
})

export * from "./Query";
export * from "./Bio";
export * from "./Position";
