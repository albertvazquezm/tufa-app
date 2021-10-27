import "reflect-metadata";
import { PrismaClient } from '@prisma/client';
import { ObjectType, Field, Resolver, buildSchemaSync, Query, ID, Mutation, Arg, InputType } from 'type-graphql';
import express from 'express';
import { graphqlHTTP } from 'express-graphql';

const prisma = new PrismaClient();

@ObjectType()
class AuthRequest {
    @Field(() => ID)
    id: number;
    @Field(() => Date)
    createdAt: Date;
    @Field(() => String)
    description: string;
    @Field(() => String)
    userId: string
}
@InputType()
class AuthRequestInput {
    @Field(() => String)
    description: string;
    @Field(() => String)
    userId: string;
}
@Resolver(AuthRequest)
class AuthRequestResolver {
    @Query(() => [AuthRequest], { nullable: false })
    async allAuthRequests() {
        return prisma.authRequest.findMany()
    }
    @Mutation(() => AuthRequest)
    async createAuthRequest(
        @Arg("authRequestData", () => AuthRequestInput) authRequestData: AuthRequestInput
    ): Promise<AuthRequest> {
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