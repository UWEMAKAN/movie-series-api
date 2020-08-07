import CreateCommentModel from './CreateCommentModel';
import Comment from '../../../../domain/comments/Comment';

export default interface ICreateCommentCommand {
  execute(model: CreateCommentModel): Promise<Comment>;
}
