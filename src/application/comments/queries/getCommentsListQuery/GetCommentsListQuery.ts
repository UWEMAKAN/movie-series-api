import IGetCommentsListQuery from './IGetCommentsListQuery';
import CommentModel from './CommentModel';
import ICommentRepository from '../../../interfaces/persistence/ICommentRepository';

class GetCommentsListQuery implements IGetCommentsListQuery {
  private readonly _repository: ICommentRepository;

  constructor(repository: ICommentRepository) {
    this._repository = repository;
  }
  public async execute(): Promise<Array<CommentModel>> {
    const comments = await this._repository.getAll();
    return comments.map((c) => {
      const comment: CommentModel = new CommentModel();
      comment.Id = c.Id;
      comment.Comment = c.Comment;
      comment.Episode = c.Episode;
      comment.IpAddressLocation = c.IpAddressLocation;
      comment.Created = c.Created;
      return comment;
    });
  }
}

export default GetCommentsListQuery;
