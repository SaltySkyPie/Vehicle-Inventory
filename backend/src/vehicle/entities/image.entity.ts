import { RandomGenerator } from '@app/utils/generator'
import { Vehicle } from '@app/vehicle/entities/vehicle.entity'
import { Field, GraphQLISODateTime, ID, ObjectType } from '@nestjs/graphql'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@ObjectType()
@Entity()
export class Image {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  id: string = RandomGenerator.uuid()

  @Field()
  @Column('text')
  url: string

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

  @ManyToOne(() => Vehicle, {
    orphanedRowAction: 'delete',
    onDelete: 'CASCADE',
  })
  @JoinColumn({
    name: 'vehicleId',
  })
  @Field(() => Vehicle)
  vehicle: Vehicle
}
