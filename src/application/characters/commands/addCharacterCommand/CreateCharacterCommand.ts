import ICreateCharacterCommand from './ICreateCharacterCommand';
import CreateCharacterModel from './CreateCharacterModel';
import Character from '../../../../domain/characters/Character';
import ICharacterRepository from '../../../interfaces/persistence/ICharacterRepository';

class CreateCharacterCommand implements ICreateCharacterCommand {
  private readonly characterRepository: ICharacterRepository;

  constructor(
    characterRepository: ICharacterRepository,
  ) {
      this.characterRepository = characterRepository;
  }

  public async execute(model: CreateCharacterModel): Promise<Character> {
    const character = new Character();
    character.FirstName = model.FirstName;
    character.LastName = model.LastName;
    character.Episodes = model.Episodes;
    character.Created = new Date();
    character.Gender = model.Gender;
    character.Status = model.Status;
    character.StateOfOrigin = model.StateOfOrigin;
    character.Location = model.Location;
    return this.characterRepository.add(character);
  }
}

export default CreateCharacterCommand;
