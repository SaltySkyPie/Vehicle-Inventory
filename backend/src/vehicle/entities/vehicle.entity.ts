import { RandomGenerator } from '@app/utils/generator'
import { Image } from '@app/vehicle/entities/image.entity'
import { Field, GraphQLISODateTime, ID, ObjectType, registerEnumType } from '@nestjs/graphql'
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

export enum FuelType {
  Petrol = 'Petrol',
  Diesel = 'Diesel',
  Electric = 'Electric',
  Hybrid = 'Hybrid',
  Hydrogen = 'Hydrogen',
  Ethanol = 'Ethanol',
  NaturalGas = 'Natural Gas',
  Other = 'Other',
}
registerEnumType(FuelType, {
  name: 'FuelType',
})

@Entity()
@ObjectType()
export class Vehicle {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string = RandomGenerator.uuid()
  @CreateDateColumn({
    name: 'createdAt',
  })
  @Field(() => GraphQLISODateTime)
  createdAt: Date

  @UpdateDateColumn({
    name: 'updatedAt',
  })
  @Field(() => GraphQLISODateTime)
  updatedAt: Date

  // brand of the vehicle
  @Field()
  @Column()
  brand: string

  // model of the vehicle
  @Field()
  @Column()
  model: string

  // engine volume of the vehicle
  @Field()
  @Column('double precision')
  engineVolume: number

  // price of the vehicle
  @Field()
  @Column('double precision')
  price: number

  // color of the vehicle
  @Field()
  @Column()
  color: string

  @Field(() => FuelType)
  @Column({
    type: 'enum',
    enum: FuelType,
  })
  fuel: FuelType

  // images of the vehicle
  @Field(() => [Image])
  @OneToMany(() => Image, (image) => image.vehicle, {
    cascade: true,
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
    eager: true,
  })
  images: Image[]
}
