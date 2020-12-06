import { objectType } from "@nexus/schema";

export const Bio = objectType({
	name: "Bio",
	definition( t ) {
		t.string( "name" )
		t.string( "tagline" )
		t.string( "email" )
		t.string( "objective" )
		// url data type isn't supported by default in nexus schema
		// also, graphql doesn't come with all data types by default
		// we need to import new scalar types - see decorateType and graphql-scalars in index.ts
		t.url( "website", ( bio ) => new URL( bio.website ) )
		t.url( "github", ( bio ) => new URL( bio.github ) )
		t.url( "linkedin", ( bio ) => new URL( bio.linkedin ) )
	},
})
