import Comment from '../../../../domain/comments/Comment';

export default interface IDeleteCommentCommand {
  execute(comment: Comment): Promise<void>;
}
