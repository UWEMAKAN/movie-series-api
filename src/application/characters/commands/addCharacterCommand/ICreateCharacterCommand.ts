import CharacterModel from './CharacterModel';

export default interface ICreateCharacterCommand {
  execute(model: CharacterModel): void;
}
