import express from "express";
import graphqlHTTP from "express-graphql";

import {schema} from "./data/schema";

const app = express();

const PORT = 3001;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(PORT, () => console.log(`Listening to express at port: ${PORT}`));

app.get("/", (req, res) => {
  res.send("GraphQL is amazing");
});
