import ICreateCommentCommand from './ICreateCommentCommand';
import CreateCommentModel from './CreateCommentModel';
import ICommentRepository from '../../../interfaces/persistence/ICommentRepository';
import Comment from '../../../../domain/comments/Comment';

class CreateCommentCommand implements ICreateCommentCommand {
  private readonly commentRepository: ICommentRepository;

  constructor(commentRepository: ICommentRepository) {
    this.commentRepository = commentRepository;
  }

  public async execute(model: CreateCommentModel): Promise<void> {
    const comment = new Comment();
    comment.Episode = model.Episode;
    comment.IpAddressLocation = model.IpAddressLocation;
    comment.Comment = model.Comment;
    comment.Created = new Date();
    await this.commentRepository.add(comment);
  }
}

export default CreateCommentCommand;
