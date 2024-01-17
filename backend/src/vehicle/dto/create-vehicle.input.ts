import { Field, InputType } from '@nestjs/graphql'
import { IsEnum, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from 'class-validator'
import { FuelType } from '../entities/vehicle.entity'

@InputType()
export class CreateVehicleInput {
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  @Field()
  brand: string

  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  @Field()
  model: string

  @IsNotEmpty()
  @IsNumber()
  @Field(() => Number)
  engineVolume: number

  @IsNotEmpty()
  @IsString()
  @MinLength(3)
  @MaxLength(255)
  @Field()
  color: string

  @IsNotEmpty()
  @IsEnum(FuelType)
  @Field(() => FuelType)
  fuel: FuelType
}
