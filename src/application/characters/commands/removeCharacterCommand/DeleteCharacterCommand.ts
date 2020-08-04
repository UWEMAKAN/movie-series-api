import IDeleteCharacterCommand from './IDeleteCharacterCommand';
import Character from '../../../../domain/characters/Character';
import ICharacterRepository from '../../../interfaces/persistence/ICharacterRepository';

class DeleteCharacterCommand implements IDeleteCharacterCommand {
  private readonly characterRepository: ICharacterRepository;

  constructor(
    characterRepository: ICharacterRepository,
  ) {
      this.characterRepository = characterRepository;
  }

  public async execute(character: Character): Promise<void> {
    await this.characterRepository.remove(character);
  }
}

export default DeleteCharacterCommand;
