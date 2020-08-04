import GetCommentsListQuery from './GetCommentsListQuery';
import CommentModel from './CommentModel';
import * as mockEntities from '../../../../../tools/mockEntities';
import Episode from '../../../../domain/episodes/Episode';

describe('GetCommentsListQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an Array of CommentModel', async () => {
    const query = new GetCommentsListQuery(mockEntities.commentRepository);
    const results = await query.execute();

    expect.assertions(4);
    expect(results).toBeInstanceOf(Array);
    expect(mockEntities.commentRepository.getAll).toHaveBeenCalledTimes(1);
    expect(results[0]).toBeInstanceOf(CommentModel);
    expect(results[0]).toMatchObject({
      id: expect.any(Number),
      comment: expect.any(String),
      episode: expect.any(Episode),
      ipAddressLocation: expect.any(String),
      created: expect.any(Date)
    });
  });
});
