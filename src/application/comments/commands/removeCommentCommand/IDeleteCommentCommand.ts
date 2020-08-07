import DeleteCommentModel from './DeleteCommentModel';

export default interface IDeleteCommentCommand {
  execute(comment: DeleteCommentModel): Promise<void>;
}
