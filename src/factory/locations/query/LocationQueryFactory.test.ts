import LocationQueryFactory from './LocationQueryFactory';
import * as mockEntities from '../../../../tools/mockEntities';
import GetLocationsListQuery from '../../../application/locations/queries/getLocationsList/GetLocationsListQuery';
import GetLocationDetailQuery from '../../../application/locations/queries/getLocationDetail/GetLocationDetailQuery';
describe('LocationQueryFactory', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should create an object with properties of type GetLocationsListQuery and GetLocationDetailQuery', () => {
    const locationQueryFactory = new LocationQueryFactory(
      mockEntities.locationRepository
    );
    expect.assertions(2);
    expect(locationQueryFactory.getLocationsListQuery).toBeInstanceOf(GetLocationsListQuery);
    expect(locationQueryFactory.getLocationDetailQuery).toBeInstanceOf(GetLocationDetailQuery);
  });
});
