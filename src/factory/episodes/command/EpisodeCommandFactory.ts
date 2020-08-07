import IEpisodeCommandFactory from './IEpisodeCommandFactory';
import IEpisodeRepository from '../../../application/interfaces/persistence/IEpisodeRepository';
import ICreateEpisodeCommand from '../../../application/episodes/commands/addEpisodeCommand/ICreateEpisodeCommand';
import IDeleteEpisodeCommand from '../../../application/episodes/commands/removeEpisodeCommand/IDeleteEpisodeCommand';
import CreateEpisodeCommand from '../../../application/episodes/commands/addEpisodeCommand/CreateEpisodeCommand';
import DeleteEpisodeCommand from '../../../application/episodes/commands/removeEpisodeCommand/DeleteEpisodeCommand';
import IEpisodeFactory from '../../../application/episodes/commands/addEpisodeCommand/createEpisode/factory/IEpisodeFactory';
import IEpisodeRepositoryFacade from '../../../application/episodes/commands/addEpisodeCommand/createEpisode/repository/IEpisodeRepositoryFacade';

class EpisodeCommandFactory implements IEpisodeCommandFactory {
  public readonly createEpisodeCommand: ICreateEpisodeCommand;
  public readonly deleteEpisodeCommand: IDeleteEpisodeCommand;

  constructor(
    episodeRepository: IEpisodeRepository,
    episodeFactory: IEpisodeFactory,
    episodeRepositoryFacade: IEpisodeRepositoryFacade,
  ) {
    this.createEpisodeCommand = new CreateEpisodeCommand(episodeFactory, episodeRepositoryFacade);
    this.deleteEpisodeCommand = new DeleteEpisodeCommand(episodeRepository);
  }
}

export default EpisodeCommandFactory;
