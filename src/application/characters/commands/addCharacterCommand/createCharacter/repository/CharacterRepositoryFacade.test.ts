import * as mockEntities from '../../../../../../../tools/mockEntities';
import CharacterRepositoryFacade from './CharacterRepositoryFacade';
import Character from '../../../../../../domain/characters/Character';
import Episode from '../../../../../../domain/episodes/Episode';
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

  it('getEpisodes should return an Array of Episode objects', async () => {
    const ids = [1, 3, 2, 4, 5];
    const episodes = await facade.getEpisodes(ids);
    expect.assertions(2);
    expect(episodes).toBeInstanceOf(Array);
    expect(episodes[1]).toBeInstanceOf(Episode);
  });

  it('addCharacter should call characterRepository.add method', async () => {
    const character = new Character();
    await facade.addCharacter(character);
    expect.assertions(1);
    expect(mockEntities.characterRepository.add).toHaveBeenCalledTimes(1);
  });
});
