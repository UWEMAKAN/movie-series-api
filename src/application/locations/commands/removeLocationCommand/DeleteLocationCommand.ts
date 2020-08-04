import IDeleteLocationCommand from './IDeleteLocationCommand';
import ILocationRepository from '../../../interfaces/persistence/ILocationRepository';
import Location from '../../../../domain/locations/Location';

class DeleteLocationCommand implements IDeleteLocationCommand {
  private readonly locationRepository: ILocationRepository;

  constructor(locationRepository: ILocationRepository) {
    this.locationRepository = locationRepository;
  }

  public async execute(entity: Location): Promise<void> {
    await this.locationRepository.remove(entity)
  }
}

export default DeleteLocationCommand;
