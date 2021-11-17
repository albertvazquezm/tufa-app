import "reflect-metadata";
import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './gql/schema';
import cors from 'cors';

const app = express();
//CORS middleware
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
}));
app.listen(4000, () => {
    console.log(`App running!`)
});