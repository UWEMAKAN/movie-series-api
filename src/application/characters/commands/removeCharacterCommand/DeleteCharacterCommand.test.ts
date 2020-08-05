import DeleteCharacterCommand from './DeleteCharacterCommand';
import DeleteCharacterModel from './DeleteCharacterModel';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('DeleteCharacterCommand', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should call characterRepository.remove and delete the given Character', async () => {
    const character = mockEntities.characters[2];
    const command = new DeleteCharacterCommand(mockEntities.characterRepository);
    const model = new DeleteCharacterModel();
    model.Id = character.Id;
    model.FirstName = character.FirstName;
    model.LastName = character.LastName;
    model.Gender = character.Gender;
    model.StateOfOrigin = character.StateOfOrigin;
    model.Status = character.Status;
    model.Location = character.Location;
    model.Episodes = character.Episodes;
    model.Created = character.Created;
    await command.execute(model);
    expect.assertions(1);
    expect(mockEntities.characterRepository.remove).toHaveBeenCalledTimes(1);
  });
});
