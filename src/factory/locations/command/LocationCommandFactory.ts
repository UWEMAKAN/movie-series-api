import ILocationCommandFactory from './ILocationCommandFactory';
import ICreateLocationCommand from '../../../application/locations/commands/addLocationCommand/ICreateLocationCommand';
import IDeleteLocationCommand from '../../../application/locations/commands/removeLocationCommand/IDeleteLocationCommand';
import CreateLocationCommand from '../../../application/locations/commands/addLocationCommand/CreateLocationCommand';
import ILocationRepository from '../../../application/interfaces/persistence/ILocationRepository';
import DeleteLocationCommand from '../../../application/locations/commands/removeLocationCommand/DeleteLocationCommand';

class LocationCommandFactory implements ILocationCommandFactory {
  public readonly createLocationCommand: ICreateLocationCommand;
  public readonly deleteLocationCommand: IDeleteLocationCommand;

  constructor(
    locationRepository: ILocationRepository
  ) {
    this.createLocationCommand = new CreateLocationCommand(locationRepository);
    this.deleteLocationCommand = new DeleteLocationCommand(locationRepository);
  }
}

export default LocationCommandFactory;
