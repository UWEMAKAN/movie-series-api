import ICreateCharacterCommand from './ICreateCharacterCommand';
import CreateCharacterModel from './CreateCharacterModel';
import Character from '../../../../domain/characters/Character';
import ICharacterFactory from './createCharacter/factory/ICharacterFactory';
import ICharacterRepositoryFacade from './createCharacter/repository/ICharacterRepositoryFacade';

class CreateCharacterCommand implements ICreateCharacterCommand {
  private readonly characterFactory: ICharacterFactory;
  private readonly repositories: ICharacterRepositoryFacade;

  constructor(
    characterFactory: ICharacterFactory,
    repositories: ICharacterRepositoryFacade
  ) {
      this.characterFactory = characterFactory;
      this.repositories = repositories;
  }

  public async execute(model: CreateCharacterModel): Promise<Character> {
    const location = await this.repositories.getLocation(model.LocationId);
    const episodes = await this.repositories.getEpisodes(model.EpisodeIds);
    const character = this.characterFactory.create(
      model.FirstName,
      model.LastName,
      model.Status,
      model.Gender,
      model.StateOfOrigin,
      episodes,
      location,
      new Date()
    );
    return this.repositories.addCharacter(character);
  }
}

export default CreateCharacterCommand;
