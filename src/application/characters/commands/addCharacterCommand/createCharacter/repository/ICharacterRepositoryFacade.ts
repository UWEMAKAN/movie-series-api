import Character from '../../../../../../domain/characters/Character';
import Episode from '../../../../../../domain/episodes/Episode';
import Location from '../../../../../../domain/locations/Location';

export default interface ICharacterRepositoryFacade {
  getLocation(locationId: number): Promise<Location>;
  getEpisodes(episodeIds: Array<number>): Promise<Array<Episode>>;
  addCharacter(character: Character): Promise<void>;
}
