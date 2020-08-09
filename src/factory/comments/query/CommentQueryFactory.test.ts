import CommentQueryFactory from './CommentQueryFactory';
import * as mockEntities from '../../../../tools/mockEntities';
import GetCommentsListQuery from '../../../application/comments/queries/getCommentsListQuery/GetCommentsListQuery';
import GetCommentDetailQuery from '../../../application/comments/queries/getCommentDetailQuery/GetCommentDetailQuery';


describe('CommentQueryFactory', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should create an object with properties of type GetCommentsListQuery and GetCommentDetailQuery', () => {
    const commentQueryFactory = new CommentQueryFactory(
      mockEntities.commentRepository
    );
    expect.assertions(2);
    expect(commentQueryFactory.getCommentsListQuery).toBeInstanceOf(GetCommentsListQuery);
    expect(commentQueryFactory.getCommentDetailQuery).toBeInstanceOf(GetCommentDetailQuery);
  });
});
