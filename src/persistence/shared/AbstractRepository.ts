import { Repository, Connection } from 'typeorm';
import IRepository from '../../application/interfaces/persistence/IRepository';
import logger from '../../common/winston';

class AbstractRepository<T> implements IRepository<T> {
  private readonly databaseConnection: Function;
  private readonly connectionName: string;
  private readonly repositoryType: Function;

  constructor(repositoryType: Function, createConnection: Function, connectionName: string = 'default') {
    this.databaseConnection = createConnection;
    this.connectionName = connectionName;
    this.repositoryType = repositoryType;
  }
  public async getAll(): Promise<Array<T>> {
    try {
      const connection: Connection = await this.databaseConnection(this.connectionName);
      const repository: Repository<T> = await connection.getRepository(this.repositoryType);
      const objects: Array<T> = await repository.find();
      connection.close();
      return objects;
    } catch (err) {
      logger.debug(err.stack);
      throw err;
    }
  }
  public async get(id: number): Promise<T> {
    try {
      const connection: Connection = await this.databaseConnection(this.connectionName);
      const repository: Repository<T> = await connection.getRepository(this.repositoryType);
      const object: T = await repository.findOneOrFail(id);
      connection.close();
      return object;
    } catch (err) {
      logger.debug(err.stack);
      throw err;
    }
  }
  public async add(entity: T): Promise<T> {
    try {
      const connection: Connection = await this.databaseConnection(this.connectionName);
      const repository: Repository<T> = await connection.getRepository(this.repositoryType);
      const object = await repository.save(entity);
      connection.close();
      return object;
    } catch (err) {
      logger.debug(err.stack);
      throw err;
    }
  }
  public async remove(entity: T): Promise<void> {
    try {
      const connection: Connection = await this.databaseConnection(this.connectionName);
      const repository: Repository<T> = await connection.getRepository(this.repositoryType);
      await repository.remove(entity)
      connection.close();
      return Promise.resolve();
    } catch (err) {
      logger.debug(err.stack);
      throw err;
    }
  }
}

export default AbstractRepository;
