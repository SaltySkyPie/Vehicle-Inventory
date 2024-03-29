import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Image } from './entities/image.entity'
import { Vehicle } from './entities/vehicle.entity'
import { VehicleResolver } from './vehicle.resolver'
import { VehicleService } from './vehicle.service'

@Module({
  imports: [TypeOrmModule.forFeature([Vehicle, Image])],
  providers: [VehicleResolver, VehicleService],
})
export class VehicleModule {}
