import CreateCharacterCommand from './CreateCharacterCommand';
import CreateCharacterModel from './CreateCharacterModel';
import * as mockEntities from '../../../../../tools/mockEntities';
import * as mockData from '../../../../../tools/mockData';
import Character from '../../../../domain/characters/Character';
import CharacterFactory from './createCharacter/factory/CharacterFactory';
import CharacterRepositoryFacade from './createCharacter/repository/CharacterRepositoryFacade';


describe('CreateCharacterCommand', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should create a new object of type Character and call characterRepository.add to save it', async () => {
    const factory = new CharacterFactory();
    const repositories = new CharacterRepositoryFacade(
      mockEntities.characterRepository,
      mockEntities.episodeRepository,
      mockEntities.locationRepository
    );
    const data = mockData.characters[0];
    const model = new CreateCharacterModel();
    model.FirstName = data.firstName;
    model.LastName = data.lastName;
    model.Status = data.status;
    model.StateOfOrigin = data.stateOfOrigin;
    model.Gender = data.gender;
    model.EpisodeIds = mockEntities.episodes.map((e) => e.Id);
    model.LocationId = mockEntities.locations[1].Id;
    const command = new CreateCharacterCommand(factory, repositories);

    const response = await command.execute(model);
    expect.assertions(4);
    expect(mockEntities.characterRepository.add).toHaveBeenCalledTimes(1);
    expect(mockEntities.episodeRepository.get).toBeCalled();
    expect(mockEntities.locationRepository.get).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(Character);
  });
});
