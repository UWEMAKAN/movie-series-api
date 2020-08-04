import ICharacterRepositoryFacade from './ICharacterRepositoryFacade';
import Character from '../../../../../../domain/characters/Character';
import Episode from '../../../../../../domain/episodes/Episode';
import Location from '../../../../../../domain/locations/Location';
import ICharacterRepository from '../../../../../interfaces/persistence/ICharacterRepository';
import IEpisodeRepository from '../../../../../interfaces/persistence/IEpisodeRepository';
import ILocationRepository from '../../../../../interfaces/persistence/ILocationRepository';

class CharacterRepositoryFacade implements ICharacterRepositoryFacade {
  private readonly characterRepository: ICharacterRepository;
  private readonly episodeRepository: IEpisodeRepository;
  private readonly locationRepository: ILocationRepository;

  constructor(
    characterRepository: ICharacterRepository,
    episodeRepository: IEpisodeRepository,
    locationRepository: ILocationRepository
  ) {
      this.characterRepository = characterRepository;
      this.episodeRepository = episodeRepository;
      this.locationRepository = locationRepository;
  }
  public async getLocation(locationId: number): Promise<Location> {
    return this.locationRepository.get(locationId);
  }
  public async getEpisodes(episodeIds: number[]): Promise<Episode[]> {
    const episodes = episodeIds.map(async (id) => {
      return this.episodeRepository.get(id);
    });
    return Promise.all(episodes);
  }
  public async addCharacter(character: Character): Promise<void> {
    await this.characterRepository.add(character);
  }
}

export default CharacterRepositoryFacade;
