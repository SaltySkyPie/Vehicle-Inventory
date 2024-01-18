import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreateImageInput } from './dto/create-image.input'
import { CreateVehicleInput } from './dto/create-vehicle.input'
import { UpdateVehicleInput } from './dto/update-vehicle.input'
import { Vehicle } from './entities/vehicle.entity'
import { VehicleService } from './vehicle.service'

@Resolver(() => Vehicle)
export class VehicleResolver {
  constructor(private readonly vehicleService: VehicleService) {}

  @Mutation(() => Vehicle)
  createVehicle(@Args('createVehicleInput') createVehicleInput: CreateVehicleInput) {
    return this.vehicleService.create(createVehicleInput)
  }

  @Query(() => [Vehicle], { name: 'vehicles' })
  findAll() {
    return this.vehicleService.findAll()
  }

  @Query(() => Vehicle, { name: 'vehicle' })
  findOne(@Args('id', { type: () => ID }) id: string) {
    return this.vehicleService.findOne(id)
  }

  @Mutation(() => Vehicle)
  updateVehicle(@Args('updateVehicleInput') updateVehicleInput: UpdateVehicleInput) {
    return this.vehicleService.update(updateVehicleInput.id, updateVehicleInput)
  }

  @Mutation(() => Boolean)
  removeVehicle(@Args('id', { type: () => ID }) id: string) {
    return this.vehicleService.remove(id)
  }

  @Mutation(() => Vehicle)
  removeImage(@Args('id', { type: () => ID }) id: string) {
    return this.vehicleService.removeImage(id)
  }

  @Mutation(() => Vehicle)
  addImages(@Args('createImageInput') { id, images }: CreateImageInput) {
    return this.vehicleService.addImages(id, images)
  }
}
