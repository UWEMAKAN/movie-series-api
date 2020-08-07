import IGetCharacterDetailQuery from './IGetCharacterDetailQuery';
import CharacterModel from './CharacterModel';
import ICharacterRepository from '../../../interfaces/persistence/ICharacterRepository';

class GetCharacterDetailQuery implements IGetCharacterDetailQuery {
  private readonly _repository: ICharacterRepository;

  constructor(repository: ICharacterRepository) {
    this._repository = repository;
  }
  public async execute(id: number): Promise<CharacterModel> {
    const data = await this._repository.getById(id);
    const character: CharacterModel = new CharacterModel();
    character.Id = data.Id;
    character.FirstName = data.FirstName;
    character.LastName = data.LastName;
    character.Gender = data.Gender;
    character.StateOfOrigin = data.StateOfOrigin;
    character.Status = data.Status;
    character.Location = data.Location;
    character.Episodes = data.Episodes;
    character.Created = data.Created;
    return character;
  }
}

export default GetCharacterDetailQuery;
