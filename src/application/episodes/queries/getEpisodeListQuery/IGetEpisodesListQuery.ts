import EpisodeModel from './EpisodeModel';

export default interface IGetEpisodesListQuery {
  execute(): Promise<Array<EpisodeModel>>;
}
