import ICommentCommandFactory from './ICommentCommandFactory';
import ICommentRepository from '../../../application/interfaces/persistence/ICommentRepository';
import ICreateCommentCommand from '../../../application/comments/commands/addCommentCommand/ICreateCommentCommand';
import IDeleteCommentCommand from '../../../application/comments/commands/removeCommentCommand/IDeleteCommentCommand';
import CreateCommentCommand from '../../../application/comments/commands/addCommentCommand/CreateCommentCommand';
import DeleteCommentCommand from '../../../application/comments/commands/removeCommentCommand/DeleteCommentCommand';
import IEpisodeRepository from '../../../application/interfaces/persistence/IEpisodeRepository';

class CommentCommandFactory implements ICommentCommandFactory {
  public readonly createCommentCommand: ICreateCommentCommand;
  public readonly deleteCommentCommand: IDeleteCommentCommand;

  constructor(
    commentRepository: ICommentRepository,
    episodeRepository: IEpisodeRepository
  ) {
    this.createCommentCommand = new CreateCommentCommand(commentRepository, episodeRepository);
    this.deleteCommentCommand = new DeleteCommentCommand(commentRepository);
  }
}

export default CommentCommandFactory;
