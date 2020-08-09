import EpisodeCommandFactory from './EpisodeCommandFactory';
import * as mockEntities from '../../../../tools/mockEntities';
import IEpisodeFactory from '../../../application/episodes/commands/addEpisodeCommand/createEpisode/factory/IEpisodeFactory';
import IEpisodeRepositoryFacade from '../../../application/episodes/commands/addEpisodeCommand/createEpisode/repository/IEpisodeRepositoryFacade';
import CreateEpisodeCommand from '../../../application/episodes/commands/addEpisodeCommand/CreateEpisodeCommand';
import DeleteEpisodeCommand from '../../../application/episodes/commands/removeEpisodeCommand/DeleteEpisodeCommand';

describe('EpisodeCommandFactory', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should create an object with properties of type CreateEpisodeCommand and DeleteEpisodeCommand', () => {
    const factory: IEpisodeFactory = {
      create: jest.fn()
    };
    const repositoryFacade: IEpisodeRepositoryFacade = {
      getCharacters: jest.fn(),
      addEpisode: jest.fn()
    };
    const episodeCommandFactory = new EpisodeCommandFactory(
      mockEntities.episodeRepository,
      factory,
      repositoryFacade
    );
    expect.assertions(1);
    expect(episodeCommandFactory).toMatchObject({
      createEpisodeCommand: expect.any(CreateEpisodeCommand),
      deleteEpisodeCommand: expect.any(DeleteEpisodeCommand)
    });
  });
});
