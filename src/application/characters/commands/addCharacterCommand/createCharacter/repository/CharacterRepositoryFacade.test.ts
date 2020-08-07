import * as mockEntities from '../../../../../../../tools/mockEntities';
import CharacterRepositoryFacade from './CharacterRepositoryFacade';
import Character from '../../../../../../domain/characters/Character';
import Location from '../../../../../../domain/locations/Location';

describe('CharacterRepositoryFacade', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  const facade: CharacterRepositoryFacade = new CharacterRepositoryFacade(
    mockEntities.characterRepository,
    mockEntities.episodeRepository,
    mockEntities.locationRepository
  );

  it('getLocation should return a location object when called', async () => {
    const id = 2;
    const location = await facade.getLocation(id);
    expect.assertions(1);
    expect(location).toBeInstanceOf(Location);
  });

  it('getEpisodes should return an Array of Episode objects when called', async () => {
    const ids = [2, 3, 1];
    const episodes = await facade.getEpisodes(ids);
    expect.assertions(1);
    expect(episodes).toBeInstanceOf(Array);
  });

  it('addCharacter should call characterRepository.add method', async () => {
    const character = new Character();
    await facade.addCharacter(character);
    expect.assertions(1);
    expect(mockEntities.characterRepository.add).toHaveBeenCalledTimes(1);
  });
});
