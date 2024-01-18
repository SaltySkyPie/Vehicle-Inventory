import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'
import { CreateVehicleInput } from './create-vehicle.input'

@InputType()
export class UpdateVehicleInput extends PartialType(CreateVehicleInput) {
  @IsNotEmpty()
  @Field(() => ID)
  id: string
}
