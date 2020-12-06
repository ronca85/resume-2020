import { ApolloServer } from "apollo-server-micro";
import { schema } from "src/schema"; // for this to work without typing ../../ etc. we need to edit tsconfig.js - add baseUrl: "."

const server = new ApolloServer({ schema })
// handler receives request from the user
const handler = server.createHandler({ path: "/api/graphql" })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
