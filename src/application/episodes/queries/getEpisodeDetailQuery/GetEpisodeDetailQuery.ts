import IGetEpisodeDetailQuery from './IGetEpisodeDetailQuery';
import EpisodeModel from './EpisodeModel';
import IEpisodeRepository from '../../../interfaces/persistence/IEpisodeRepository';

class GetEpisodeDetailQuery implements IGetEpisodeDetailQuery {
  private readonly _repository: IEpisodeRepository;

  constructor(repository: IEpisodeRepository) {
    this._repository = repository;
  }
  public async execute(id: number): Promise<EpisodeModel> {
    const data = await this._repository.getById(id);
    const episode: EpisodeModel = new EpisodeModel();
    episode.Id = data.Id;
    episode.Name = data.Name;
    episode.ReleaseDate = data.ReleaseDate;
    episode.EpisodeCode = data.EpisodeCode;
    episode.Comments = data.Comments;
    episode.Characters = data.Characters;
    episode.Created = data.Created;
    return episode;
  }
}

export default GetEpisodeDetailQuery;
