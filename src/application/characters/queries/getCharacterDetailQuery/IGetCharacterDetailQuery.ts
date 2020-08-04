import CharacterModel from './CharacterModel';

export default interface IGetCharacterDetailQuery {
  execute(id: number): Promise<CharacterModel>;
}
