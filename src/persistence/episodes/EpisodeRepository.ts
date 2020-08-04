import Episode from '../../domain/episodes/Episode';
import IEpisodeRepository from '../../application/interfaces/persistence/IEpisodeRepository';
import AbstractRepository from '../shared/AbstractRepository';

class EpisodeRepository extends AbstractRepository<Episode> implements IEpisodeRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }
}

export default EpisodeRepository;
