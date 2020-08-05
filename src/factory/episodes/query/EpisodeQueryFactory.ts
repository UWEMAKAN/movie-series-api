import IEpisodeQueryFactory from './IEpisodeQueryFactory';
import IEpisodeRepository from '../../../application/interfaces/persistence/IEpisodeRepository';
import IGetEpisodesListQuery from '../../../application/episodes/queries/getEpisodeListQuery/IGetEpisodesListQuery';
import IGetEpisodeDetailQuery from '../../../application/episodes/queries/getEpisodeDetailQuery/IGetEpisodeDetailQuery';
import GetEpisodesListQuery from '../../../application/episodes/queries/getEpisodeListQuery/GetEpisodesListQuery';
import GetEpisodeDetailQuery from '../../../application/episodes/queries/getEpisodeDetailQuery/GetEpisodeDetailQuery';

class EpisodeQueryFactory implements IEpisodeQueryFactory {
  public readonly getEpisodesListQuery: IGetEpisodesListQuery;
  public readonly getEpisodeDetailQuery: IGetEpisodeDetailQuery;

  constructor(
    episodeRepository: IEpisodeRepository
  ) {
    this.getEpisodesListQuery = new GetEpisodesListQuery(episodeRepository);
    this.getEpisodeDetailQuery = new GetEpisodeDetailQuery(episodeRepository);
  }
}

export default EpisodeQueryFactory;
