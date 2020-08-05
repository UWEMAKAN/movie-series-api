import ILocationQueryFactory from './ILocationQueryFactory';
import ILocationRepository from '../../../application/interfaces/persistence/ILocationRepository';
import IGetLocationsListQuery from '../../../application/locations/queries/getLocationsList/IGetLocationsListQuery';
import IGetLocationDetailQuery from '../../../application/locations/queries/getLocationDetail/IGetLocationDetailQuery';
import GetLocationsListQuery from '../../../application/locations/queries/getLocationsList/GetLocationsListQuery';
import GetLocationDetailQuery from '../../../application/locations/queries/getLocationDetail/GetLocationDetailQuery';

class LocationQueryFactory implements ILocationQueryFactory {
  public readonly getLocationsListQuery: IGetLocationsListQuery;
  public readonly getLocationDetailQuery: IGetLocationDetailQuery;

  constructor(
    locationRepository: ILocationRepository
  ) {
    this.getLocationsListQuery = new GetLocationsListQuery(locationRepository);
    this.getLocationDetailQuery = new GetLocationDetailQuery(locationRepository);
  }
}

export default LocationQueryFactory;
