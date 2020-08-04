import IDeleteEpisodeCommand from './IDeleteEpisodeCommand';
import IEpisodeRepository from '../../../interfaces/persistence/IEpisodeRepository';
import Episode from '../../../../domain/episodes/Episode';

class DeleteEpisodeCommand implements IDeleteEpisodeCommand {
  private readonly episodeRepository: IEpisodeRepository;

  constructor(episodeRepository: IEpisodeRepository) {
    this.episodeRepository = episodeRepository;
  }

  public async execute(episode: Episode): Promise<void> {
    await this.episodeRepository.remove(episode);
  }
}

export default DeleteEpisodeCommand;
