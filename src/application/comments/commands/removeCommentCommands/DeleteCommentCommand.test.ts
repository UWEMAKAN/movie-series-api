import DeleteCommentCommand from './DeleteCommentCommand';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('DeleteCommentCommand', () => {
  it('execute should delete the given comment by calling commentRepository.remove', async () => {
    const comment = mockEntities.comments[0];
    const command = new DeleteCommentCommand(mockEntities.commentRepository);
    await command.execute(comment);
    expect.assertions(1);
    expect(mockEntities.commentRepository.remove).toHaveBeenCalledTimes(1);
  });
});

