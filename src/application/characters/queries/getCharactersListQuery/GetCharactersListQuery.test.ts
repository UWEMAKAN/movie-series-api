import GetCharactersListQuery from './GetCharactersListQuery';
import CharacterModel from './CharacterModel';
import * as mockEntities from '../../../../../tools/mockEntities';
import Location from '../../../../domain/locations/Location';

describe('GetCharactersListQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an Array of CharacterModel', async () => {
    const query = new GetCharactersListQuery(mockEntities.characterRepository);
    const results = await query.execute();

    expect.assertions(4);
    expect(results).toBeInstanceOf(Array);
    expect(mockEntities.characterRepository.getAll).toHaveBeenCalledTimes(1);
    expect(results[0]).toBeInstanceOf(CharacterModel);
    expect(results[0]).toMatchObject({
      id: expect.any(Number),
      firstName: expect.any(String),
      lastName: expect.any(String),
      status: expect.any(String),
      stateOfOrigin: expect.any(String),
      gender: expect.any(String),
      location: expect.any(Location),
      episodes: expect.any(Array),
      created: expect.any(Date)
    });
  });
});
