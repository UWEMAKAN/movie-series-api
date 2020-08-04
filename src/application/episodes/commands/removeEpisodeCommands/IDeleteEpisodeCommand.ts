import Episode from '../../../../domain/episodes/Episode';

export default interface IDeleteEpisodeCommand {
  execute(entity: Episode): Promise<void>;
}
