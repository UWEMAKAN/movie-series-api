import ICharacterQueryFactory from './characters/query/ICharacterQueryFactory';
import ICommentQueryFactory from './comments/query/ICommentQueryFactory';
import IEpisodeQueryFactory from './episodes/query/IEpisodeQueryFactory';
import ILocationQueryFactory from './locations/query/ILocationQueryFactory';

export default interface IQueryFactory {
  characterQuery: ICharacterQueryFactory;
  commentQuery: ICommentQueryFactory;
  episodeQuery: IEpisodeQueryFactory;
  locationQuery: ILocationQueryFactory;
}
