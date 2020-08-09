import CharacterQueryFactory from './CharacterQueryFactory';
import * as mockEntities from '../../../../tools/mockEntities';
import GetCharactersListQuery from '../../../application/characters/queries/getCharactersListQuery/GetCharactersListQuery';
import GetCharacterDetailQuery from '../../../application/characters/queries/getCharacterDetailQuery/GetCharacterDetailQuery';

describe('CharacterQueryFactory', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should create an object of with properties of type GetCharactersListQuery and GetCharacterDetailQuery', () => {
    const characterQueryFactory = new CharacterQueryFactory(
      mockEntities.characterRepository
    );
    expect.assertions(1);
    expect(characterQueryFactory).toMatchObject({
      getCharactersListQuery: expect.any(GetCharactersListQuery),
      getCharacterDetailQuery: expect.any(GetCharacterDetailQuery)
    });
  });
});

