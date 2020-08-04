import GetLocationsListQuery from './GetLocationsListQuery';
import LocationModel from './LocationModel';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('GetLocationsListQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an Array of LocationModel', async () => {
    const query = new GetLocationsListQuery(mockEntities.locationRepository);
    const results = await query.execute();

    expect.assertions(4);
    expect(results).toBeInstanceOf(Array);
    expect(mockEntities.locationRepository.getAll).toHaveBeenCalledTimes(1);
    expect(results[0]).toBeInstanceOf(LocationModel);
    expect(results[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      latitude: expect.any(Number),
      longitude: expect.any(Number),
      created: expect.any(Date)
    });
  });
});
