import IGetCharactersListQuery from '../../../application/characters/queries/getCharactersListQuery/IGetCharactersListQuery';
import IGetCharacterDetailQuery from '../../../application/characters/queries/getCharacterDetailQuery/IGetCharacterDetailQuery';

export default interface ICharacterQueryFactory {
  getCharactersListQuery: IGetCharactersListQuery;
  getCharacterDetailQuery: IGetCharacterDetailQuery;
}
