import { makeSchema } from "@nexus/schema";
// path is a node package for working with filesystem of your machine
import path from "path";
import * as types from "./allTypes";

export const schema = makeSchema({
	types,
	outputs: {
		// for some reason __dirname doesn't work with next.js
		// schema: path.join(__dirname)
		// use process.cwd(), which is the current working directory
		// our cwd is the root folder, or wherever our next dev (yarn dev) command is running
		schema: path.join( process.cwd(), "schema.graphql" ),
		typegen: path.join( process.cwd(), "src", "generated", "nexus.ts" ),
	},
	// we now need to give schema some hints about what kind of data we're working with
	// define this in interfaces.ts
	typegenAutoConfig: {
		sources: [
			{
				alias: "faces",
				source: path.join( process.cwd(), "src", "interfaces.ts" ),
				// we need to tell nexus how to connect objectType Bio with BioInterfaces
				typeMatch: ( type ) => new RegExp( `${type}Interface` )
			}
		],
		backingTypeMap: {
			Date: "Date",
			URL: "URL",
		},
		// backingTypeMap can be hard to debug
		// this is why we can define debug
		debug: process.env.NODE_ENV === "development",
		// the cli will say No match for ... if we misspell soumething in the sources
	}
})
