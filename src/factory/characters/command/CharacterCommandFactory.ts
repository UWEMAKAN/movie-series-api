import ICharacterCommandFactory from './ICharacterCommandFactory';
import ICharacterRepository from '../../../application/interfaces/persistence/ICharacterRepository';
import ICreateCharacterCommand from '../../../application/characters/commands/addCharacterCommand/ICreateCharacterCommand';
import IDeleteCharacterCommand from '../../../application/characters/commands/removeCharacterCommand/IDeleteCharacterCommand';
import CreateCharacterCommand from '../../../application/characters/commands/addCharacterCommand/CreateCharacterCommand';
import DeleteCharacterCommand from '../../../application/characters/commands/removeCharacterCommand/DeleteCharacterCommand';
import ICharacterFactory from '../../../application/characters/commands/addCharacterCommand/createCharacter/factory/ICharacterFactory';
import ICharacterRepositoryFacade from '../../../application/characters/commands/addCharacterCommand/createCharacter/repository/ICharacterRepositoryFacade';

class CharacterCommandFactory implements ICharacterCommandFactory {
  public readonly createCharacterCommand: ICreateCharacterCommand;
  public readonly deleteCharacterCommand: IDeleteCharacterCommand;

  constructor(
    characterRepository: ICharacterRepository,
    characterFactory: ICharacterFactory,
    repositoryFacade: ICharacterRepositoryFacade
  ) {
    this.createCharacterCommand = new CreateCharacterCommand(characterFactory, repositoryFacade);
    this.deleteCharacterCommand = new DeleteCharacterCommand(characterRepository);
  }
}

export default CharacterCommandFactory;
