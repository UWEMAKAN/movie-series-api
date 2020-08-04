import IGetCharactersListQuery from './IGetCharactersListQuery';
import CharacterModel from './CharacterModel';
import ICharacterRepository from '../../../interfaces/persistence/ICharacterRepository';

class GetCharactersListQuery implements IGetCharactersListQuery {
  private readonly _repository: ICharacterRepository;

  constructor(repository: ICharacterRepository) {
    this._repository = repository;
  }
  public async execute(): Promise<Array<CharacterModel>> {
    const characters = await this._repository.getAll();
    return characters.map((c) => {
      const character: CharacterModel = new CharacterModel();
      character.Id = c.Id;
      character.FirstName = c.FirstName;
      character.LastName = c.LastName;
      character.Gender = c.Gender;
      character.StateOfOrigin = c.StateOfOrigin;
      character.Status = c.Status;
      character.Location = c.Location;
      character.Episodes = c.Episodes;
      character.Created = c.Created;
      return character;
    });
  }
}

export default GetCharactersListQuery;
