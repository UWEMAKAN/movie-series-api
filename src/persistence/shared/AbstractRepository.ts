import { Repository, Connection } from 'typeorm';
import IRepository from '../../application/interfaces/persistence/IRepository';
import logger from '../../common/winston';

class AbstractRepository<T> implements IRepository<T> {
  protected readonly databaseConnection: Function;
  protected readonly connectionName: string;
  protected readonly repositoryType: Function;

  constructor(repositoryType: Function, createConnection: Function, connectionName: string = 'default') {
    this.databaseConnection = createConnection;
    this.connectionName = connectionName;
    this.repositoryType = repositoryType;
  }
  public async getAll(): Promise<Array<T>> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<T> = await connection.getRepository(this.repositoryType);
      const objects: Array<T> = await repository.find();
      connection.close();
      return objects;
    } catch (err) {
      connection.close();
      logger.debug(err.stack);
      throw err;
    }
  }
  public async get(id: number): Promise<T> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<T> = await connection.getRepository(this.repositoryType);
      const object = await repository.findOne(id);
      connection.close();
      return object ? object : new Object() as T;
    } catch (err) {
      connection.close();
      logger.debug(err.stack);
      throw err;
    }
  }
  public async add(entity: T): Promise<T> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<T> = await connection.getRepository(this.repositoryType);
      const object = await repository.save(entity);
      connection.close();
      return object;
    } catch (err) {
      connection.close();
      logger.debug(err.stack);
      throw err;
    }
  }
  public async remove(entity: T): Promise<void> {
    const connection: Connection = await this.databaseConnection(this.connectionName);
    try {
      const repository: Repository<T> = await connection.getRepository(this.repositoryType);
      await repository.remove(entity)
      connection.close();
      return Promise.resolve();
    } catch (err) {
      connection.close();
      logger.debug(err.stack);
      throw err;
    }
  }
}

export default AbstractRepository;
