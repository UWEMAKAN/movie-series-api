import Comment from '../../domain/comments/Comment';
import ICommentRepository from '../../application/interfaces/persistence/ICommentRepository';
import AbstractRepository from '../shared/AbstractRepository';

class CommentRepository extends AbstractRepository<Comment> implements ICommentRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }
}

export default CommentRepository;
