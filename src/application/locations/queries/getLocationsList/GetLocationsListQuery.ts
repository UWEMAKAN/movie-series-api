import IGetLocationsListQuery from './IGetLocationsListQuery';
import LocationModel from './LocationModel';
import ILocationRepository from '../../../interfaces/persistence/ILocationRepository';

class GetLocationsListQuery implements IGetLocationsListQuery {
  private readonly _repository: ILocationRepository;

  constructor(repository: ILocationRepository) {
    this._repository = repository;
  }
  public async execute(): Promise<Array<LocationModel>> {
    const locations = await this._repository.getAll();
    return locations.map((l) => {
      const location: LocationModel = new LocationModel();
      location.Id = l.Id;
      location.Name = l.Name;
      location.Latitude = l.Latitude;
      location.Longitude = l.Longitude;
      location.Created = l.Created;
      return location;
    });
  }
}

export default GetLocationsListQuery;
