import CreateCommentCommand from './CreateCommentCommand';
import * as mockEntities from '../../../../../tools/mockEntities';
import * as mockData from '../../../../../tools/mockData';
import CreateCommentModel from './CreateCommentModel';
import Comment from '../../../../domain/comments/Comment';

const data = mockData.comments[0];

describe('CreateCommentCommand', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  
  it('execute should create a new object of type Comment and call commentRepository.add to save it', async () => {
    const commentModel = new CreateCommentModel();
    commentModel.Comment = data.comment;
    commentModel.EpisodeId = mockEntities.episodes[5].Id;
    commentModel.IpAddressLocation = data.ipAddressLocation;
    const command = new CreateCommentCommand(mockEntities.commentRepository, mockEntities.episodeRepository);

    const response = await command.execute(commentModel);
    expect.assertions(2);
    expect(mockEntities.commentRepository.add).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(Comment);
  });
});
