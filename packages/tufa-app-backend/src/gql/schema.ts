import { buildSchemaSync } from 'type-graphql';
import { AuthRequestResolver } from './resolvers/AuthRequestResolver';

export const schema = buildSchemaSync({
    resolvers: [AuthRequestResolver],
});