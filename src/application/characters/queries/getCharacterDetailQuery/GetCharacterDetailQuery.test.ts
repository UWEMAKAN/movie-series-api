import GetCharacterDetailQuery from './GetCharacterDetailQuery';
import CharacterModel from './CharacterModel';
import * as mockEntities from '../../../../../tools/mockEntities';
import Location from '../../../../domain/locations/Location';

describe('GetCharacterDetailQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an object of type CharacterModel', async () => {
    const id = 3;
    const query = new GetCharacterDetailQuery(mockEntities.characterRepository);
    const result = await query.execute(3);

    expect.assertions(3);
    expect(mockEntities.characterRepository.get).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(CharacterModel);
    expect(result).toMatchObject({
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
