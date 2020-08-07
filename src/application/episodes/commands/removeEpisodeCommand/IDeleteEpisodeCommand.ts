import DeleteEpisodeModel from './DeleteEpisodeModel';

export default interface IDeleteEpisodeCommand {
  execute(entity: DeleteEpisodeModel): Promise<void>;
}
