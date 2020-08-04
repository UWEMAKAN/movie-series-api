import CommentModel from './CommentModel';

export default interface IGetCommentsListQuery {
  execute(): Promise<Array<CommentModel>>;
}
