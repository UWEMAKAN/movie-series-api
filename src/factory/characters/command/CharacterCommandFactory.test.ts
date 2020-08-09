import CharacterCommandFactory from './CharacterCommandFactory';
import * as mockEntities from '../../../../tools/mockEntities';
import ICharacterRepositoryFacade from '../../../application/characters/commands/addCharacterCommand/createCharacter/repository/ICharacterRepositoryFacade';
import ICharacterFactory from '../../../application/characters/commands/addCharacterCommand/createCharacter/factory/ICharacterFactory';
import DeleteCharacterCommand from '../../../application/characters/commands/removeCharacterCommand/DeleteCharacterCommand';
import CreateCharacterCommand from '../../../application/characters/commands/addCharacterCommand/CreateCharacterCommand';

describe('CharacterCommandFactory', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should return an object with properties of type CreateCharacterCommand, and DeleteCharacterCommand', () => {
    const repositoryFacade: ICharacterRepositoryFacade = {
      getEpisodes: jest.fn(),
      getLocation: jest.fn(),
      addCharacter: jest.fn()
    };
    const factory: ICharacterFactory = {
      create: jest.fn()
    };
    const characterCommandFactory = new CharacterCommandFactory(
      mockEntities.characterRepository,
      factory,
      repositoryFacade
    );
    expect.assertions(1);
    expect(characterCommandFactory).toMatchObject({
      createCharacterCommand: expect.any(CreateCharacterCommand),
      deleteCharacterCommand: expect.any(DeleteCharacterCommand)
    })
  });
});

