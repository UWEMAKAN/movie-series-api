import * as mockEntities from '../../../../../../../tools/mockEntities';
import EpisodeRepositoryFacade from './EpisodeRepositoryFacade';
import Character from '../../../../../../domain/characters/Character';
import Episode from '../../../../../../domain/episodes/Episode';
import Location from '../../../../../../domain/locations/Location';

describe('EpisodeRepositoryFacade', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  const facade: EpisodeRepositoryFacade = new EpisodeRepositoryFacade(
    mockEntities.characterRepository,
    mockEntities.episodeRepository
  );

  it('getCharacters should return an Array of Character objects', async () => {
    const ids = [1, 3, 2, 4, 5];
    const characters = await facade.getCharacters(ids);
    expect.assertions(3);
    expect(characters).toBeInstanceOf(Array);
    expect(characters[1]).toBeInstanceOf(Character);
    expect(mockEntities.characterRepository.get).toHaveBeenCalledTimes(5);
  });

  it('addEpisode should call episodeRepository.add method', async () => {
    const episode = new Episode();
    await facade.addEpisode(episode);
    expect.assertions(1);
    expect(mockEntities.episodeRepository.add).toHaveBeenCalledTimes(1);
  });
});
