import EpisodeModel from './EpisodeModel';

export default interface IGetEpisodeDetailQuery {
  execute(id: number): Promise<EpisodeModel>;
}
