import { Field, ID, InputType, ObjectType } from "type-graphql";

@ObjectType()
export class AuthRequest {
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
export class AuthRequestInput {
    @Field(() => String)
    description: string;
    @Field(() => String)
    userId: string;
}
