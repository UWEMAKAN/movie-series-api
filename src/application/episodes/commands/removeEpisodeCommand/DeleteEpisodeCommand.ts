import IDeleteEpisodeCommand from './IDeleteEpisodeCommand';
import IEpisodeRepository from '../../../interfaces/persistence/IEpisodeRepository';
import Episode from '../../../../domain/episodes/Episode';
import DeleteEpisodeModel from './DeleteEpisodeModel';

class DeleteEpisodeCommand implements IDeleteEpisodeCommand {
  private readonly episodeRepository: IEpisodeRepository;

  constructor(episodeRepository: IEpisodeRepository) {
    this.episodeRepository = episodeRepository;
  }

  public async execute(model: DeleteEpisodeModel): Promise<void> {
    const episode = new Episode();
    episode.Id = model.Id;
    episode.Name = model.Name;
    episode.ReleaseDate = model.ReleaseDate;
    episode.EpisodeCode = model.EpisodeCode;
    episode.EpisodeComments = model.EpisodeComments;
    episode.Characters = model.Characters;
    episode.Created = model.Created;
    await this.episodeRepository.remove(episode);
  }
}

export default DeleteEpisodeCommand;
