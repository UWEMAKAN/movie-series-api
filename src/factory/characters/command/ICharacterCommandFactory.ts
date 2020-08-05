import ICreateCharacterCommand from '../../../application/characters/commands/addCharacterCommand/ICreateCharacterCommand';
import IDeleteCharacterCommand from '../../../application/characters/commands/removeCharacterCommand/IDeleteCharacterCommand';

export default interface ICharacterCommandFactory {
  createCharacterCommand: ICreateCharacterCommand;
  deleteCharacterCommand: IDeleteCharacterCommand;
}
