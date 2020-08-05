import ICreateCommentCommand from '../../../application/comments/commands/addCommentCommands/ICreateCommentCommand';
import IDeleteCommentCommand from '../../../application/comments/commands/removeCommentCommands/IDeleteCommentCommand';

export default interface ICommentCommandFactory {
  createCommentCommand: ICreateCommentCommand;
  deleteCommentCommand: IDeleteCommentCommand;
}
