import IEpisodeRepositoryFacade from './IEpisodeRepositoryFacade';
import Character from '../../../../../../domain/characters/Character';
import Episode from '../../../../../../domain/episodes/Episode';
import ICharacterRepository from '../../../../../interfaces/persistence/ICharacterRepository';
import IEpisodeRepository from '../../../../../interfaces/persistence/IEpisodeRepository';


class EpisodeRepositoryFacade implements IEpisodeRepositoryFacade {
  private readonly characterRepository: ICharacterRepository;
  private readonly episodeRepository: IEpisodeRepository;

  constructor(
    characterRepository: ICharacterRepository,
    episodeRepository: IEpisodeRepository,
  ) {
      this.characterRepository = characterRepository;
      this.episodeRepository = episodeRepository;
  }
  public async getCharacters(characterIds: Array<number>): Promise<Array<Character>> {
    const characters = characterIds.map(async (id) => {
      return this.characterRepository.get(id);
    });
    return Promise.all(characters);
  }
  public async addEpisode(episode: Episode): Promise<Episode> {
    return this.episodeRepository.add(episode);
  }
}

export default EpisodeRepositoryFacade;
