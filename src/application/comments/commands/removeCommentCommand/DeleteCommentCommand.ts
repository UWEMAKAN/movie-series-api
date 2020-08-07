import IDeleteCommentCommand from './IDeleteCommentCommand';
import ICommentRepository from '../../../interfaces/persistence/ICommentRepository';
import DeleteCommentModel from './DeleteCommentModel';
import Comment from '../../../../domain/comments/Comment';

class CreateCommentCommand implements IDeleteCommentCommand {
  private readonly commentRepository: ICommentRepository;

  constructor(commentRepository: ICommentRepository) {
    this.commentRepository = commentRepository;
  }

  public async execute(model: DeleteCommentModel): Promise<void> {
    const comment = new Comment();
    comment.Id = model.Id;
    comment.Comment = model.Comment;
    comment.IpAddressLocation = model.IpAddressLocation;
    comment.Created = model.Created;
    await this.commentRepository.remove(comment);
  }
}

export default CreateCommentCommand;
