import { Repository, Connection } from 'typeorm';
import logger from '../../common/winston';
import Episode from '../../domain/episodes/Episode';
import IEpisodeRepository from '../../application/interfaces/persistence/IEpisodeRepository';
import AbstractRepository from '../shared/AbstractRepository';

class EpisodeRepository extends AbstractRepository<Episode> implements IEpisodeRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }

  public async getAll(): Promise<Array<Episode>> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<Episode> = await connection.getRepository(this.repositoryType);
      const episodes: Array<Episode> = await repository
        .createQueryBuilder('episode')
        .leftJoinAndSelect('episode.characters', 'character')
        .leftJoinAndSelect('episode.comments', 'comment')
        .getMany();
      await connection.close();
      return episodes;
    } catch (err) {
      console.log(err)
      await connection.close();
      logger.debug(err.stack);
      throw err;
    }
  }

  public async getById(id: number): Promise<Episode> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<Episode> = await connection.getRepository(this.repositoryType);
      const episode = await repository.createQueryBuilder('episode')
      .leftJoinAndSelect('episode.characters', 'character')
      .leftJoinAndSelect('episode.comments', 'comment')
      .where('episode.id = :episodeId', { episodeId: id })
      .getOne();
      await connection.close();
      return episode ? episode : new Episode();
    } catch (err) {
      await connection.close();
      logger.debug(err.stack);
      throw err;
    }
  }

  public async update(episode: Episode): Promise<Episode> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<Episode> = await connection.getRepository(this.repositoryType);
      const object = await repository.save(episode);
      await connection.close();
      return object;
    } catch (err) {
      await connection.close();
      logger.debug(err.stack);
      throw err;
    }
  }
}

export default EpisodeRepository;
