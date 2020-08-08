import { Repository, Connection } from 'typeorm';
import Comment from '../../domain/comments/Comment';
import ICommentRepository from '../../application/interfaces/persistence/ICommentRepository';
import AbstractRepository from '../shared/AbstractRepository';

class CommentRepository extends AbstractRepository<Comment> implements ICommentRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }

  public async getAll(): Promise<Array<Comment>> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<Comment> = await connection.getRepository(this.repositoryType);
      const comments = await repository.find({ relations: ['episode'] });
      // const episodes: Array<Episode> = await repository
      //   .createQueryBuilder('episode')
      //   .leftJoinAndSelect('episode.characters', 'character')
      //   .leftJoinAndSelect('episode.comments', 'comment')
      //   .getMany();
      // episodes.sort((a, b) => {
      //   return Number(a.ReleaseDate) - Number(b.ReleaseDate);
      // })
      await connection.close();
      return comments;
    } catch (err) {
      await connection.close();
      // logger.debug(err.stack);
      throw err;
    }
  }
}

export default CommentRepository;
