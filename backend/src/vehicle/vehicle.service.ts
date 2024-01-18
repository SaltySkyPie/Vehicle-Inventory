import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateVehicleInput } from './dto/create-vehicle.input'
import { UpdateVehicleInput } from './dto/update-vehicle.input'
import { Image } from './entities/image.entity'
import { Vehicle } from './entities/vehicle.entity'

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(Vehicle) private vehicleRepository: Repository<Vehicle>,
    @InjectRepository(Image) private imageRepository: Repository<Image>
  ) {}

  async create(createVehicleInput: CreateVehicleInput) {
    const vehicle: Vehicle = {
      ...new Vehicle(),
      ...createVehicleInput,
      images: [],
    }

    return await this.vehicleRepository.save(vehicle)
  }

  findAll() {
    return this.vehicleRepository.find({
      order: {
        createdAt: 'DESC',
      },
    })
  }

  findOne(id: string) {
    return this.vehicleRepository.findOneByOrFail({ id })
  }

  async addImages(id: string, images: string[]) {
    const vehicle = await this.vehicleRepository.findOneByOrFail({ id })

    // Fetch existing images only once
    const existingImages = new Set(vehicle.images.map((img) => img.url))

    // Filter out images that already exist
    const newImageUrls = images.filter((url) => !existingImages.has(url))

    // Create new Image instances for the new images
    const newImages = newImageUrls.map((url) => {
      const newImg = new Image()
      newImg.url = url
      newImg.vehicle = vehicle
      return newImg
    })

    // Bulk insert new images (using save with an array does bulk insert in TypeORM)
    await this.imageRepository.save(newImages)

    // Assign and deduplicate images - Set ensures all URLs are unique
    vehicle.images = Array.from(new Set([...vehicle.images, ...newImages]))

    // Save the vehicle with the new set of images
    return this.vehicleRepository.save(vehicle)
  }

  async removeImage(imageId: string) {
    const image = await this.imageRepository.findOneOrFail({
      where: { id: imageId },
      relations: {
        vehicle: true,
      },
    })
    const vehicleId = image.vehicle.id

    await this.imageRepository.remove(image)
    return await this.vehicleRepository.findOneByOrFail({ id: vehicleId })
  }

  async update(id: string, updateVehicleInput: UpdateVehicleInput) {
    const vehicle = await this.vehicleRepository.findOneByOrFail({ id })

    vehicle.brand = updateVehicleInput.brand ?? vehicle.brand
    vehicle.model = updateVehicleInput.model ?? vehicle.model
    vehicle.engineVolume = updateVehicleInput.engineVolume ?? vehicle.engineVolume
    vehicle.color = updateVehicleInput.color ?? vehicle.color
    vehicle.fuel = updateVehicleInput.fuel ?? vehicle.fuel

    return this.vehicleRepository.save(vehicle)
  }

  async remove(id: string) {
    const vehicle = await this.vehicleRepository.findOneByOrFail({ id })

    return this.vehicleRepository.remove(vehicle)
  }
}
