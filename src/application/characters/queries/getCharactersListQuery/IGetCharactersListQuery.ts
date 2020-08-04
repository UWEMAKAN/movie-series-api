import CharacterModel from './CharacterModel';

export default interface IGetCharactersListQuery {
  execute(): Promise<Array<CharacterModel>>;
}
