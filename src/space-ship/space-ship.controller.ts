import { Controller } from '@nestjs/common';
import { SpaceShipService } from './space-ship.service';
jest.mock('./space-ship.service');

@Controller('space-ship')
export class SpaceShipController {

    constructor(private service: SpaceShipService) { }

    public save(spaceShip: any) {
        this.service.save(spaceShip);
    }
}
