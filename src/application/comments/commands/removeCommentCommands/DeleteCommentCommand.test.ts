import DeleteCommentCommand from './DeleteCommentCommand';
import DeleteCommentModel from './DeleteCommentModel';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('DeleteCommentCommand', () => {
  it('execute should delete the given comment by calling commentRepository.remove', async () => {
    const comment = mockEntities.comments[0];
    const model = new DeleteCommentModel();
    model.Id = comment.Id;
    model.Comment = comment.Comment;
    model.Episode = comment.Episode;
    model.IpAddressLocation = comment.IpAddressLocation;
    model.Created = comment.Created;
    const command = new DeleteCommentCommand(mockEntities.commentRepository);
    await command.execute(model);
    expect.assertions(1);
    expect(mockEntities.commentRepository.remove).toHaveBeenCalledTimes(1);
  });
});

