import ICreateEpisodeCommand from './ICreateEpisodeCommand';
import CreateEpisodeModel from './CreateEpisodeModel';
import IEpisodeRepository from '../../../interfaces/persistence/IEpisodeRepository';
import Episode from '../../../../domain/episodes/Episode';

class CreateEpisodeCommand implements ICreateEpisodeCommand {
  private readonly episodeRepository: IEpisodeRepository;

  constructor(episodeRepository: IEpisodeRepository) {
    this.episodeRepository = episodeRepository;
  }

  public async execute(model: CreateEpisodeModel): Promise<void> {
    const episode = new Episode();
    episode.Characters = model.Characters;
    episode.EpisodeCode = model.EpisodeCode;
    episode.EpisodeComments = model.EpisodeComments;
    episode.Name = model.Name;
    episode.ReleaseDate = model.ReleaseDate;
    episode.Created = new Date();
    await this.episodeRepository.add(episode);
  }
}

export default CreateEpisodeCommand;
