import "reflect-metadata";
import { PrismaClient } from '@prisma/client';
import { ObjectType, Field, Resolver, buildSchemaSync, Query, ID, Mutation, Arg } from 'type-graphql';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const prisma = new PrismaClient();

interface AuthRequestInput {
    description: string;
    userId: string;
}

@ObjectType()
class AuthRequest {
    @Field(type => ID)
    id?: Number;
    @Field(type => Date)
    createdAt?: string;
    @Field(type => String)
    description?: string;
    @Field(type => String)
    userId?: string
}
@Resolver(AuthRequest)
class AuthRequestResolver {
    @Query(() => AuthRequest, { nullable: false })
    async allAuthRequests() {
        return prisma.authRequest.findMany()
    }
    @Mutation(() => AuthRequest)
    async createAuthRequest(
        @Arg("authRequestData") authRequestData: AuthRequestInput
    ) {
        return prisma.authRequest.create({
            data: authRequestData
        })
    }
}
const schema = buildSchemaSync({
    resolvers: [AuthRequestResolver],
});
const app = express();
app.use('/graphql', graphqlHTTP({
    schema,
}));
app.listen(4000, () => {
    console.log(`App running!`)
});