import express from "express";
import graphqlHTTP from "express-graphql";

import schema from "./schema";
import resolvers from './resolvers';

const app = express();

const PORT = 3001;

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Listening to express at port: ${PORT}`));

app.get("/", (req, res) => {
  res.send("GraphQL is amazing");
});
