import Character from '../../../../../../domain/characters/Character';
import Episode from '../../../../../../domain/episodes/Episode';
import Location from '../../../../../../domain/locations/Location';

export default interface ICharacterFactory {
  create(
    firstName: string,
    lastName: string,
    status: string,
    gender: string,
    stateOfOrigin: string,
    episodes: Array<Episode>,
    location: Location,
    created: Date
  ): Character;
}
