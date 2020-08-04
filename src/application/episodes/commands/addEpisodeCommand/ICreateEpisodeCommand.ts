import CreateEpisodeModel from './CreateEpisodeModel';
import Episode from '../../../../domain/episodes/Episode';

export default interface ICreateEpisodeCommand {
  execute(model: CreateEpisodeModel): Promise<Episode>;
}
