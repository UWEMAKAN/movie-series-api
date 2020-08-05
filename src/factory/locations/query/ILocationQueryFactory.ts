import IGetLocationsListQuery from '../../../application/locations/queries/getLocationsList/IGetLocationsListQuery';
import IGetLocationDetailQuery from '../../../application/locations/queries/getLocationDetail/IGetLocationDetailQuery';

export default interface ILocationQueryFactory {
  getLocationsListQuery: IGetLocationsListQuery;
  getLocationDetailQuery: IGetLocationDetailQuery;
}
