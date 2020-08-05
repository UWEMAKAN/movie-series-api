import ICharacterQueryFactory from './ICharacterQueryFactory';
import ICharacterRepository from '../../../application/interfaces/persistence/ICharacterRepository';
import IGetCharactersListQuery from '../../../application/characters/queries/getCharactersListQuery/IGetCharactersListQuery';
import IGetCharacterDetailQuery from '../../../application/characters/queries/getCharacterDetailQuery/IGetCharacterDetailQuery';
import GetCharactersListQuery from '../../../application/characters/queries/getCharactersListQuery/GetCharactersListQuery';
import GetCharacterDetailQuery from '../../../application/characters/queries/getCharacterDetailQuery/GetCharacterDetailQuery';

class CharacterQueryFactory implements ICharacterQueryFactory {
  public readonly getCharactersListQuery: IGetCharactersListQuery;
  public readonly getCharacterDetailQuery: IGetCharacterDetailQuery;

  constructor(
    characterRepository: ICharacterRepository
  ) {
    this.getCharactersListQuery = new GetCharactersListQuery(characterRepository);
    this.getCharacterDetailQuery = new GetCharacterDetailQuery(characterRepository);
  }
}

export default CharacterQueryFactory;
