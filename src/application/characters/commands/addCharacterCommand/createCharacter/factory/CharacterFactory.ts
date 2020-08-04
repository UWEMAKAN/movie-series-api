import ICharacterFactory from './ICharacterFactory';
import Character from '../../../../../../domain/characters/Character';
import Episode from '../../../../../../domain/episodes/Episode';
import Location from '../../../../../../domain/locations/Location';

class CharacterFactory implements ICharacterFactory {
  public create(
    firstName: string,
    lastName: string,
    status: string,
    gender: string,
    stateOfOrigin: string,
    location: Location,
    episodes: Array<Episode>,
    created: Date
  ): Character {
    const character = new Character();
    character.FirstName = firstName;
    character.LastName = lastName;
    character.Gender = gender;
    character.StateOfOrigin = stateOfOrigin;
    character.Status = status;
    character.Location = location;
    character.Episodes = episodes;
    character.Created = created;
    return character;
  }
}

export default CharacterFactory;
