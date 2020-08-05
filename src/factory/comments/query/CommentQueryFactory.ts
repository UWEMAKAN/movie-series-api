import ICommentQueryFactory from './ICommentQueryFactory';
import ICommentRepository from '../../../application/interfaces/persistence/ICommentRepository';
import IGetCommentsListQuery from '../../../application/comments/queries/getCommentsListQuery/IGetCommentsListQuery';
import IGetCommentDetailQuery from '../../../application/comments/queries/getCommentDetailQuery/IGetCommentDetailQuery';
import GetCommentsListQuery from '../../../application/comments/queries/getCommentsListQuery/GetCommentsListQuery';
import GetCommentDetailQuery from '../../../application/comments/queries/getCommentDetailQuery/GetCommentDetailQuery';

class CommentQueryFactory implements ICommentQueryFactory {
  public readonly getCommentsListQuery: IGetCommentsListQuery;
  public readonly getCommentDetailQuery: IGetCommentDetailQuery;

  constructor(
    commentRepository: ICommentRepository
  ) {
    this.getCommentsListQuery = new GetCommentsListQuery(commentRepository);
    this.getCommentDetailQuery = new GetCommentDetailQuery(commentRepository);
  }
}

export default CommentQueryFactory;
