import IGetCommentDetailQuery from './IGetCommentDetailQuery';
import CommentModel from './CommentModel';
import ICommentRepository from '../../../interfaces/persistence/ICommentRepository';

class GetCommentDetailQuery implements IGetCommentDetailQuery {
  private readonly _repository: ICommentRepository;

  constructor(repository: ICommentRepository) {
    this._repository = repository;
  }
  public async execute(id: number): Promise<CommentModel> {
    const data = await this._repository.get(id);
    const comment: CommentModel = new CommentModel();
    comment.Id = data.Id;
    comment.Comment = data.Comment;
    comment.Episode = data.Episode;
    comment.IpAddressLocation = data.IpAddressLocation;
    comment.Created = data.Created;
    return comment;
  }
}

export default GetCommentDetailQuery;
