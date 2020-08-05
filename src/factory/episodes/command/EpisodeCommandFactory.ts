import IEpisodeCommandFactory from './IEpisodeCommandFactory';
import IEpisodeRepository from '../../../application/interfaces/persistence/IEpisodeRepository';
import ICreateEpisodeCommand from '../../../application/episodes/commands/addEpisodeCommand/ICreateEpisodeCommand';
import IDeleteEpisodeCommand from '../../../application/episodes/commands/removeEpisodeCommands/IDeleteEpisodeCommand';
import CreateEpisodeCommand from '../../../application/episodes/commands/addEpisodeCommand/CreateEpisodeCommand';
import DeleteEpisodeCommand from '../../../application/episodes/commands/removeEpisodeCommands/DeleteEpisodeCommand';

class EpisodeCommandFactory implements IEpisodeCommandFactory {
  public readonly createEpisodeCommand: ICreateEpisodeCommand;
  public readonly deleteEpisodeCommand: IDeleteEpisodeCommand;

  constructor(
    episodeRepository: IEpisodeRepository
  ) {
    this.createEpisodeCommand = new CreateEpisodeCommand(episodeRepository);
    this.deleteEpisodeCommand = new DeleteEpisodeCommand(episodeRepository);
  }
}

export default EpisodeCommandFactory;
