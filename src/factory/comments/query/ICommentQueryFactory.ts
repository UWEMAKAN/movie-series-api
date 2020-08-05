import IGetCommentsListQuery from '../../../application/comments/queries/getCommentsListQuery/IGetCommentsListQuery';
import IGetCommentDetailQuery from '../../../application/comments/queries/getCommentDetailQuery/IGetCommentDetailQuery';

export default interface ICommentQueryFactory {
  getCommentsListQuery: IGetCommentsListQuery;
  getCommentDetailQuery: IGetCommentDetailQuery;
}
