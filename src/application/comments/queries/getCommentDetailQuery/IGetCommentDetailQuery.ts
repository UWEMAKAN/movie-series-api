import CommentModel from './CommentModel';

export default interface IGetCommentDetailQuery {
  execute(id: number): Promise<CommentModel>;
}
