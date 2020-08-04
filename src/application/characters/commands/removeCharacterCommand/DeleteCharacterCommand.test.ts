import DeleteCharacterCommand from './DeleteCharacterCommand';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('DeleteCharacterCommand', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should call characterRepository.remove and delete the given Character', async () => {
    const character = mockEntities.characters[2];
    const command = new DeleteCharacterCommand(mockEntities.characterRepository);

    await command.execute(character);
    expect.assertions(1);
    expect(mockEntities.characterRepository.remove).toHaveBeenCalledTimes(1);
  });
});
