import CreateEpisodeModel from './CreateEpisodeModel';

export default interface ICreateEpisodeCommand {
  execute(model: CreateEpisodeModel): Promise<void>;
}
