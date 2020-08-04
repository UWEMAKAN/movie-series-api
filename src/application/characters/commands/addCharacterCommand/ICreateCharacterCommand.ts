import CharacterModel from './CreateCharacterModel';
import Character from '../../../../domain/characters/Character';

export default interface ICreateCharacterCommand {
  execute(model: CharacterModel): Promise<Character>;
}
