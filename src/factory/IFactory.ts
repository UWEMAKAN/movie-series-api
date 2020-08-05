import IRepositoryFactory from './repositories/IRepositoryFactory';
import IQueryFactory from './IQueryFactory';
import ICommandFactory from './ICommandFactory';

export default interface IFactory {
  repositoryFactory: IRepositoryFactory;
  queryFactory: IQueryFactory;
  commandFactory: ICommandFactory;
}
