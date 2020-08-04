import GetLocationDetailQuery from './GetLocationDetailQuery';
import LocationModel from './LocationModel';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('GetLocationDetailQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an object of type LocationModel', async () => {
    const id = 1;
    const query = new GetLocationDetailQuery(mockEntities.locationRepository);
    const result = await query.execute(1);

    expect.assertions(3);
    expect(mockEntities.locationRepository.get).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(LocationModel);
    expect(result).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      latitude: expect.any(Number),
      longitude: expect.any(Number),
      created: expect.any(Date)
    });
  });
});
