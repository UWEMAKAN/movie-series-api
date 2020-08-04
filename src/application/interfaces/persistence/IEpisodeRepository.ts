import IRepository from './IRepository';
import Episode from '../../../domain/episodes/Episode';

export default interface IEpisodeRepository extends IRepository<Episode> {}
