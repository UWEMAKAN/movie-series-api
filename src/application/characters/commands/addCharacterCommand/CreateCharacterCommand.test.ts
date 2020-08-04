import CreateCharacterCommand from './CreateCharacterCommand';
import CreateCharacterModel from './CreateCharacterModel';
import * as mockEntities from '../../../../../tools/mockEntities';
import * as mockData from '../../../../../tools/mockData';
import Character from '../../../../domain/characters/Character';

describe('CreateCharacterCommand', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should create a new object of type Character and call characterRepository.add to save it', async () => {
    const data = mockData.characters[0];
    const model = new CreateCharacterModel();
    model.FirstName = data.firstName;
    model.LastName = data.lastName;
    model.Status = data.status;
    model.StateOfOrigin = data.stateOfOrigin;
    model.Gender = data.gender;
    model.Episodes = mockEntities.episodes;
    model.Location = mockEntities.locations[1];
    const command = new CreateCharacterCommand(mockEntities.characterRepository);

    const response = await command.execute(model);
    expect.assertions(2);
    expect(mockEntities.characterRepository.add).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(Character);
  });
});
