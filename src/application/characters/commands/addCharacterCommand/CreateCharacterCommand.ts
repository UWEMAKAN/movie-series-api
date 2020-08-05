import ICreateCharacterCommand from './ICreateCharacterCommand';
import CreateCharacterModel from './CreateCharacterModel';
import Character from '../../../../domain/characters/Character';
import Location from '../../../../domain/locations/Location';
import ICharacterRepository from '../../../interfaces/persistence/ICharacterRepository';

class CreateCharacterCommand implements ICreateCharacterCommand {
  private readonly characterRepository: ICharacterRepository;

  constructor(
    characterRepository: ICharacterRepository,
  ) {
      this.characterRepository = characterRepository;
  }

  public async execute(model: CreateCharacterModel): Promise<Character> {
    const location = new Location();
    location.Name = model.Location.Name;
    location.Latitude = model.Location.Latitude;
    location.Longitude = model.Location.Longitude;
    const character = new Character();
    character.FirstName = model.FirstName;
    character.LastName = model.LastName;
    character.Episodes = model.Episodes;
    character.Created = new Date();
    character.Gender = model.Gender;
    character.Status = model.Status;
    character.StateOfOrigin = model.StateOfOrigin;
    character.Location = location;
    return this.characterRepository.add(character);
  }
}

export default CreateCharacterCommand;
