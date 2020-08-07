import Episode from '../../../../../../domain/episodes/Episode';
import Character from '../../../../../../domain/characters/Character';

export default interface IEpisodeRepositoryFacade {
  addEpisode(episode: Episode): Promise<Episode>;
  getCharacters(characterIds: Array<number>): Promise<Array<Character>>;
}
