import IGetLocationDetailQuery from './IGetLocationDetailQuery';
import LocationModel from './LocationModel';
import ILocationRepository from '../../../interfaces/persistence/ILocationRepository';

class GetLocationDetailQuery implements IGetLocationDetailQuery {
  private readonly _repository: ILocationRepository;

  constructor(repository: ILocationRepository) {
    this._repository = repository;
  }
  public async execute(id: number): Promise<LocationModel> {
    const data = await this._repository.get(id);
    const location = new LocationModel();
    location.Id = data.Id;
    location.Name = data.Name;
    location.Latitude = data.Latitude;
    location.Longitude = data.Longitude;
    location.Created = data.Created;
    return location;
  }
}

export default GetLocationDetailQuery;
