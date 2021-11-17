import { Resolver, Query, Arg, Mutation } from "type-graphql"
import { prismaClientInstance } from "../../prisma/tufaPrismaClient"
import { AuthRequest, AuthRequestInput } from "../types/AuthRequestTypes"

@Resolver(AuthRequest)
export class AuthRequestResolver {
    @Query(() => [AuthRequest], { nullable: false })
    async allAuthRequests() {
        return prismaClientInstance.authRequest.findMany()
    }
    @Mutation(() => AuthRequest)
    async createAuthRequest(
        @Arg("authRequestData", () => AuthRequestInput) authRequestData: AuthRequestInput
    ): Promise<AuthRequest> {
        return prismaClientInstance.authRequest.create({
            data: authRequestData
        })
    }
}