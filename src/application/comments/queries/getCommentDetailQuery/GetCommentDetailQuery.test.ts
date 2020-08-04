import GetCommentDetailQuery from './GetCommentDetailQuery';
import CommentModel from './CommentModel';
import * as mockEntities from '../../../../../tools/mockEntities';
import Episode from '../../../../domain/episodes/Episode';

describe('GetCommentDetailQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an Array of CommentModel', async () => {
    const id = 1;
    const query = new GetCommentDetailQuery(mockEntities.commentRepository);
    const result = await query.execute(id);

    expect.assertions(3);
    expect(mockEntities.commentRepository.get).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(CommentModel);
    expect(result).toMatchObject({
      id: expect.any(Number),
      comment: expect.any(String),
      episode: expect.any(Episode),
      ipAddressLocation: expect.any(String),
      created: expect.any(Date)
    });
  });
});
