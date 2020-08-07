import Character from '../../../../../../domain/characters/Character';
import Location from '../../../../../../domain/locations/Location';
import Episode from '../../../../../../domain/episodes/Episode';

export default interface ICharacterRepositoryFacade {
  getLocation(locationId: number): Promise<Location>;
  getEpisodes(episodeIds: Array<number>): Promise<Array<Episode>>
  addCharacter(character: Character): Promise<Character>;
}
