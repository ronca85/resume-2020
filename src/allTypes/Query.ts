import { idArg, queryType } from "@nexus/schema";
import { data } from "src/data";
import { Bio, Position } from "./index";

export const Query = queryType({
	definition( t ) {
		t.field( "bio", {
			type: Bio,
			// resolver defines how to find/load this data (Bio, in this case)
			// it can be async, and it can receive 3 parameters
			// ctx is like a global object that's being passed around to any single resolver
			// ctx is where you might have your connection to your db, or which user is authenticated, etc.
			// resolve: async ( root, args, ctx ) => {}
			resolve: () => data.bio,
		} )

		t.list.field( "positions", {
			type: Position,
			resolve: () => data.positions,
		} )

		// how to lookup a position using its id

		t.field( "position", {
			type: Position,
			// description shows up in the graphql docs
			description: "Find a position by its ID 🥰",
			// we need to add nullable to handle errors in case id we entered doesn't exist
			nullable: true,
			args: { id: idArg() },
			// resolve: ( root, args, ctx )
			// replace args with incoming argument and define it is of type string
			// { id }: { id: string }
			resolve: ( root, { id }: { id: string }, ctx ) => data.positions.find( position => position.id === id )
		} )
	}
})
