    import { Field, ID, InputType } from '@nestjs/graphql'
    import { IsNotEmpty, IsUrl } from 'class-validator'

    @InputType()
    export class CreateImageInput {
        @IsNotEmpty()
        @Field(() => ID)
        id: string



    @IsNotEmpty()
    @IsUrl({ require_protocol: true, protocols: ['http', 'https'] }, { each: true })
    @Field(() => [String])
    images: string[]
    }
