import IDeleteLocationCommand from './IDeleteLocationCommand';
import ILocationRepository from '../../../interfaces/persistence/ILocationRepository';
import Location from '../../../../domain/locations/Location';
import DeleteLocationModel from './DeleteLocationModel';

class DeleteLocationCommand implements IDeleteLocationCommand {
  private readonly locationRepository: ILocationRepository;

  constructor(locationRepository: ILocationRepository) {
    this.locationRepository = locationRepository;
  }

  public async execute(model: DeleteLocationModel): Promise<void> {
    const location = new Location();
    location.Id = model.Id;
    location.Name = model.Name;
    location.Latitude = model.Latitude;
    location.Longitude = model.Longitude;
    location.Created = model.Created;
    await this.locationRepository.remove(location)
  }
}

export default DeleteLocationCommand;
