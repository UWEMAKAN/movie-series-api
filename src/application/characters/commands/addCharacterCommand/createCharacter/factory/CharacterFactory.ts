import ICharacterFactory from './ICharacterFactory';
import Character from '../../../../../../domain/characters/Character';
import Location from '../../../../../../domain/locations/Location';
import Episode from '../../../../../../domain/episodes/Episode';

class CharacterFactory implements ICharacterFactory {
  public create(
    firstName: string,
    lastName: string,
    status: string,
    gender: string,
    stateOfOrigin: string,
    episodes: Array<Episode>,
    location: Location,
    created: Date
  ): Character {
    const character = new Character();
    character.FirstName = firstName;
    character.LastName = lastName;
    character.Gender = gender;
    character.StateOfOrigin = stateOfOrigin;
    character.Episodes = episodes;
    character.Status = status;
    character.Location = location;
    character.Created = created;
    return character;
  }
}

export default CharacterFactory;
