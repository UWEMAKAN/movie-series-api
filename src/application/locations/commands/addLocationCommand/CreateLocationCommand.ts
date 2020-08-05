import CreateLocationModel from './CreateLocationModel';
import ICreateLocationCommand from './ICreateLocationCommand';
import ILocationRepository from '../../../interfaces/persistence/ILocationRepository';
import Location from '../../../../domain/locations/Location';

class CreateLocationCommand implements ICreateLocationCommand {
  private readonly locationRepository: ILocationRepository;

  constructor(locationRepository: ILocationRepository) {
    this.locationRepository = locationRepository;
  }

  public async execute(model: CreateLocationModel): Promise<Location> {
    const location = new Location();
    location.Latitude = model.Latitude;
    location.Longitude = model.Longitude;
    location.Created = new Date();
    return this.locationRepository.add(location);
  }
}

export default CreateLocationCommand;
