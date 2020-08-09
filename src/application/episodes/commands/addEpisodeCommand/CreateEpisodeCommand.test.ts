import CreateEpisodeCommand from './CreateEpisodeCommand';
import Episode from '../../../../domain/episodes/Episode';
import * as mockEntities from '../../../../../tools/mockEntities';
import * as mockData from '../../../../../tools/mockData';
import CreateEpisodeModel from './CreateEpisodeModel';
import IEpisodeFactory from './createEpisode/factory/IEpisodeFactory';
import IEpisodeRepositoryFacade from './createEpisode/repository/IEpisodeRepositoryFacade';

describe('CreateEpisodeCommand', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  
  const data = mockData.episodes[0];

  const factory: IEpisodeFactory = {
    create: jest.fn().mockReturnValue(mockEntities.episodes[1])
  };
  const repositoryFacade: IEpisodeRepositoryFacade = {
    getCharacters: jest.fn().mockReturnValue(Promise.resolve(mockEntities.characters)),
    addEpisode: jest.fn().mockReturnValue(Promise.resolve(mockEntities.episodes[1]))
  };
  it('execute should call factory.create to create a new object of type Episode and call episodeRepository.add to save it', async () => {
    const episodeModel = new CreateEpisodeModel();
    episodeModel.Name = data.name;
    episodeModel.ReleaseDate = new Date(data.releaseDate);
    episodeModel.EpisodeCode = data.episodeCode;
    episodeModel.CharacterIds = [2, 1, 4];
    const command = new CreateEpisodeCommand(factory, repositoryFacade);

    const response = await command.execute(episodeModel);
    expect.assertions(4);
    expect(repositoryFacade.getCharacters).toHaveBeenCalledTimes(1);
    expect(factory.create).toHaveBeenCalledTimes(1);
    expect(repositoryFacade.addEpisode).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(Episode);
  });
});
