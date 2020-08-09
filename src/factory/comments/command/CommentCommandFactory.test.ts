import CommentCommandFactory from './CommentCommandFactory';
import * as mockEntities from '../../../../tools/mockEntities';
import CreateCommentCommand from '../../../application/comments/commands/addCommentCommand/CreateCommentCommand';
import DeleteCommentCommand from '../../../application/comments/commands/removeCommentCommand/DeleteCommentCommand';
describe('CommentCommandFactory', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should create an object with properties of type CreateCommentCommand and DeleteCommentCommand', () => {
    const commentCommandFactory = new CommentCommandFactory(
      mockEntities.commentRepository,
      mockEntities.episodeRepository
    );
    expect.assertions(2);
    expect(commentCommandFactory.createCommentCommand).toBeInstanceOf(CreateCommentCommand);
    expect(commentCommandFactory.deleteCommentCommand).toBeInstanceOf(DeleteCommentCommand);
  });
});
