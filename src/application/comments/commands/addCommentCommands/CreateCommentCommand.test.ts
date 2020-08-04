import CreateCommentCommand from './CreateCommentCommand';
import * as mockEntities from '../../../../../tools/mockEntities';
import * as mockData from '../../../../../tools/mockData';
import CreateCommentModel from './CreateCommentModel';

const data = mockData.comments[0];

describe('CreateCommentCommand', () => {
  it('execute should create a new object of type Comment and call commentRepository.add to save it', async () => {
    const commentModel = new CreateCommentModel();
    commentModel.Comment = data.comment;
    commentModel.Episode = mockEntities.episodes[5];
    commentModel.IpAddressLocation = data.ipAddressLocation;
    const command = new CreateCommentCommand(mockEntities.commentRepository);

    await command.execute(commentModel);
    expect.assertions(1);
    expect(mockEntities.commentRepository.add).toHaveBeenCalledTimes(1);
  });
});

