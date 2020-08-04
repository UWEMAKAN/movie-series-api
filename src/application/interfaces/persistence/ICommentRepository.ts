import IRepository from './IRepository';
import Comment from '../../../domain/comments/Comment';

export default interface ICommentRepository extends IRepository<Comment> {}
