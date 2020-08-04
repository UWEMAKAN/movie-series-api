import CharacterModel from './CreateCharacterModel';

export default interface ICreateCharacterCommand {
  execute(model: CharacterModel): Promise<void>;
}
