import IDeleteCommentCommand from './IDeleteCommentCommand';
import ICommentRepository from '../../../interfaces/persistence/ICommentRepository';
import Comment from '../../../../domain/comments/Comment';

class CreateCommentCommand implements IDeleteCommentCommand {
  private readonly commentRepository: ICommentRepository;

  constructor(commentRepository: ICommentRepository) {
    this.commentRepository = commentRepository;
  }

  public async execute(comment: Comment): Promise<void> {
    await this.commentRepository.remove(comment);
  }
}

export default CreateCommentCommand;
