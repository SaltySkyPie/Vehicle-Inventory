import { Field, ID, InputType, PartialType } from '@nestjs/graphql'
import { CreateVehicleInput } from './create-vehicle.input'
import { IsNotEmpty } from 'class-validator'

@InputType()
export class UpdateVehicleInput extends PartialType(CreateVehicleInput) {

  @IsNotEmpty()
  @Field(() => ID)
  id: string
}
