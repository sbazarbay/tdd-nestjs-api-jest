import { Module } from '@nestjs/common';
import { SpaceShipController } from './space-ship.controller';

@Module({
  controllers: [SpaceShipController]
})
export class SpaceShipModule {}
