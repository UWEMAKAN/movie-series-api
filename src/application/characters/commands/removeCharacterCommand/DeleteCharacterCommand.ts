import IDeleteCharacterCommand from './IDeleteCharacterCommand';
import DeleteCharacterModel from './DeleteCharacterModel';
import Character from '../../../../domain/characters/Character';
import ICharacterRepository from '../../../interfaces/persistence/ICharacterRepository';

class DeleteCharacterCommand implements IDeleteCharacterCommand {
  private readonly characterRepository: ICharacterRepository;

  constructor(
    characterRepository: ICharacterRepository,
  ) {
      this.characterRepository = characterRepository;
  }

  public async execute(model: DeleteCharacterModel): Promise<void> {
    const character = new Character();
    character.Id = model.Id;
    character.FirstName = model.FirstName;
    character.LastName = model.LastName;
    character.Gender = model.Gender;
    character.StateOfOrigin = model.StateOfOrigin;
    character.Status = model.Status;
    character.Location = model.Location;
    character.Episodes = model.Episodes;
    character.Created = model.Created;
    await this.characterRepository.remove(character);
  }
}

export default DeleteCharacterCommand;
