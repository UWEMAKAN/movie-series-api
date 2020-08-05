import ICharacterCommandFactory from './characters/command/ICharacterCommandFactory';
import ICommentCommandFactory from './comments/command/ICommentCommandFactory';
import IEpisodeCommandFactory from './episodes/command/IEpisodeCommandFactory';
import ILocationCommandFactory from './locations/command/ILocationCommandFactory'

export default interface ICommandFactory {
  characterCommand: ICharacterCommandFactory;
  commentCommand: ICommentCommandFactory;
  episodeCommand: IEpisodeCommandFactory;
  locationCommand: ILocationCommandFactory;
}
