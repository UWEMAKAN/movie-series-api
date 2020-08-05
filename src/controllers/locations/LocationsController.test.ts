import LocationsController from './LocationsController';
import * as mockEntities from '../../../tools/mockEntities';

describe('LocationsController', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const controller = new LocationsController(
    mockEntities.getLocationsListQuery,
    mockEntities.getLocationDetailQuery
  );

  it('should create a LocationsController object', () => {
    expect.assertions(2);
    expect(controller).toBeInstanceOf(LocationsController);
    expect(controller).toMatchObject({
      getLocationsListQuery: expect.any(Object),
      getLocationDetailQuery: expect.any(Object),
      getAll: expect.any(Function),
      getById: expect.any(Function)
    });
  });

  it('getAll should call execute, res.json and return an array of Location objects', async () => {
    const results = await controller.getAll(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(4);
    expect(mockEntities.getLocationsListQuery.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
    expect(results).toBeInstanceOf(Array);
    expect(results).toEqual(mockEntities.locations);
  });

  it('getById should call execute, res.json and return a Location object', async () => {
    mockEntities.req.params.locationId = '1';
    const results = await controller.getById(mockEntities.req, mockEntities.res, mockEntities.next);
    expect.assertions(3);
    expect(mockEntities.getLocationDetailQuery.execute).toHaveBeenCalledTimes(1);
    expect(mockEntities.res.json).toHaveBeenCalledTimes(1);
    expect(results).toEqual(mockEntities.locations[0]);
  });
});
