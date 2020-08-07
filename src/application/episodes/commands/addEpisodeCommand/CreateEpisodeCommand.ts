import ICreateEpisodeCommand from './ICreateEpisodeCommand';
import CreateEpisodeModel from './CreateEpisodeModel';
import Episode from '../../../../domain/episodes/Episode';
import IEpisodeRepositoryFacade from './createEpisode/repository/IEpisodeRepositoryFacade';
import IEpisodeFactory from './createEpisode/factory/IEpisodeFactory';

class CreateEpisodeCommand implements ICreateEpisodeCommand {
  private readonly factory: IEpisodeFactory;
  private readonly repositories: IEpisodeRepositoryFacade;

  constructor(
    factory: IEpisodeFactory,
    repositories: IEpisodeRepositoryFacade
  ) {
    this.factory = factory;
    this.repositories = repositories;
  }

  public async execute(model: CreateEpisodeModel): Promise<Episode> {
    const characters = await this.repositories.getCharacters(model.CharacterIds);
    const episode = this.factory.create(
      model.Name,
      model.ReleaseDate,
      model.EpisodeCode,
      characters,
      new Date()
    )
    return this.repositories.addEpisode(episode);
  }
}

export default CreateEpisodeCommand;
