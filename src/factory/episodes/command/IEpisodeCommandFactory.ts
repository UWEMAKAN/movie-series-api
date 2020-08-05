import ICreateEpisodeCommand from '../../../application/episodes/commands/addEpisodeCommand/ICreateEpisodeCommand';
import IDeleteEpisodeCommand from '../../../application/episodes/commands/removeEpisodeCommands/IDeleteEpisodeCommand';

export default interface IEpisodeCommandFactory {
  createEpisodeCommand: ICreateEpisodeCommand;
  deleteEpisodeCommand: IDeleteEpisodeCommand;
}
