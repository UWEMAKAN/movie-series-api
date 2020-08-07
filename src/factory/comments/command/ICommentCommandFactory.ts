import ICreateCommentCommand from '../../../application/comments/commands/addCommentCommand/ICreateCommentCommand';
import IDeleteCommentCommand from '../../../application/comments/commands/removeCommentCommand/IDeleteCommentCommand';

export default interface ICommentCommandFactory {
  createCommentCommand: ICreateCommentCommand;
  deleteCommentCommand: IDeleteCommentCommand;
}
