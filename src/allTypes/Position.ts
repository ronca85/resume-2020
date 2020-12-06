import { list, objectType } from "@nexus/schema";
import { differenceInYears, differenceInMonths } from "date-fns";

export const Position = objectType({
	name: "Position",
	definition( t ) {
		// in typescript id is an actual objectType and it can be a string or an integer, doesn't matter
		t.id( "id" )
		t.string( "title" )
		t.string( "company" )
		// date data type isn't supported by default in nexus schema
		// also, graphql doesn't come with all data types by default
		// we need to import new scalar types - see decorateType and graphql-scalars in index.ts
		t.date( "startDate", {
			description: "When I started at this position",
			resolve: ( position ) => new Date( position.startDate ),
		} )
		// endDate is optional, so if there is an end date return endDate, otherwise return null
		t.date( "endDate", {
			// because endDate is optional we need to define nullable
			nullable: true,
			resolve: ( position ) =>
				position.endDate ? new Date( position.endDate ) : null,
		})
		// if endDate exists calculate differenceInYears, otherwise use today's date (new Date())
		t.int( "years", ({ endDate, startDate }) =>
			differenceInYears(
				endDate ? new Date( endDate ) : new Date(),
				new Date( startDate )
			)
		)

		t.int( "months", ({ endDate, startDate }) =>
			differenceInMonths(
				endDate ? new Date( endDate ) : new Date(),
				new Date( startDate )
			) % 12
		)

		t.list.string( "achievements", ( position ) => position.achievements )
	},
})
