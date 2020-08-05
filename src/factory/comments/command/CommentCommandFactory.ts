import ICommentCommandFactory from './ICommentCommandFactory';
import ICommentRepository from '../../../application/interfaces/persistence/ICommentRepository';
import ICreateCommentCommand from '../../../application/comments/commands/addCommentCommands/ICreateCommentCommand';
import IDeleteCommentCommand from '../../../application/comments/commands/removeCommentCommands/IDeleteCommentCommand';
import CreateCommentCommand from '../../../application/comments/commands/addCommentCommands/CreateCommentCommand';
import DeleteCommentCommand from '../../../application/comments/commands/removeCommentCommands/DeleteCommentCommand';

class CommentCommandFactory implements ICommentCommandFactory {
  public readonly createCommentCommand: ICreateCommentCommand;
  public readonly deleteCommentCommand: IDeleteCommentCommand;

  constructor(
    commentRepository: ICommentRepository
  ) {
    this.createCommentCommand = new CreateCommentCommand(commentRepository);
    this.deleteCommentCommand = new DeleteCommentCommand(commentRepository);
  }
}

export default CommentCommandFactory;
