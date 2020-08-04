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
    location: Location,
    episodes: Array<Episode>,
    created: Date
  ): Character;
}
