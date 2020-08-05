import IGetEpisodesListQuery from '../../../application/episodes/queries/getEpisodeListQuery/IGetEpisodesListQuery';
import IGetEpisodeDetailQuery from '../../../application/episodes/queries/getEpisodeDetailQuery/IGetEpisodeDetailQuery';

export default interface IEpisodeQueryFactory {
  getEpisodesListQuery: IGetEpisodesListQuery;
  getEpisodeDetailQuery: IGetEpisodeDetailQuery;
}
