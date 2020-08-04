import IGetEpisodesListQuery from './IGetEpisodesListQuery';
import EpisodeModel from './EpisodeModel';
import IEpisodeRepository from '../../../interfaces/persistence/IEpisodeRepository';

class GetEpisodesListQuery implements IGetEpisodesListQuery {
  private readonly _repository: IEpisodeRepository;

  constructor(repository: IEpisodeRepository) {
    this._repository = repository;
  }
  public async execute(): Promise<Array<EpisodeModel>> {
    const episodes = await this._repository.getAll();
    return episodes.map((e) => {
      const episode: EpisodeModel = new EpisodeModel();
      episode.Id = e.Id;
      episode.Name = e.Name;
      episode.ReleaseDate = e.ReleaseDate;
      episode.EpisodeCode = e.EpisodeCode;
      episode.EpisodeComments = e.EpisodeComments;
      episode.Characters = e.Characters;
      episode.Created = e.Created;
      return episode;
    });
  }
}

export default GetEpisodesListQuery;
