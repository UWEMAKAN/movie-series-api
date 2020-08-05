import { createConnection } from 'typeorm';
import RepositoryFactory from './repositories/RepositoryFactory';
import CharacterQueryFactory from './characters/query/CharacterQueryFactory';
import CharacterCommandFactory from './characters/command/CharacterCommandFactory';
import CommentQueryFactory from './comments/query/CommentQueryFactory';
import CommentCommandFactory from './comments/command/CommentCommandFactory';
import EpisodeQueryFactory from './episodes/query/EpisodeQueryFactory';
import EpisodeCommandFactory from './episodes/command/EpisodeCommandFactory';
import LocationQueryFactory from './locations/query/LocationQueryFactory';
import LocationCommandFactory from './locations/command/LocationCommandFactory';
import CharacterRepositoryFacade from '../application/characters/commands/addCharacterCommand/createCharacter/repository/CharacterRepositoryFacade';
import CharacterFactory from '../application/characters/commands/addCharacterCommand/createCharacter/factory/CharacterFactory';
import IFactory from './IFactory';

function factory(connectionName: string): IFactory {
  const repositoryFactory = new RepositoryFactory(createConnection, connectionName);

  const characterRepositoryFacade = new CharacterRepositoryFacade(
    repositoryFactory.characterRepository,
    repositoryFactory.episodeRepository,
    repositoryFactory.locationRepository
  );

  const characterFactory = new CharacterFactory();

  const characterQuery = new CharacterQueryFactory(
    repositoryFactory.characterRepository
  );

  const characterCommand = new CharacterCommandFactory(
    repositoryFactory.characterRepository,
    characterFactory,
    characterRepositoryFacade
  );

  const commentQuery = new CommentQueryFactory(
    repositoryFactory.commentRepository
  );

  const commentCommand = new CommentCommandFactory(
    repositoryFactory.commentRepository
  );

  const episodeQuery = new EpisodeQueryFactory(
    repositoryFactory.episodeRepository
  );

  const episodeCommand = new EpisodeCommandFactory(
    repositoryFactory.episodeRepository
  );

  const locationQuery = new LocationQueryFactory(
    repositoryFactory.locationRepository
  );

  const locationCommand = new LocationCommandFactory(
    repositoryFactory.locationRepository
  );

  return {
    repositoryFactory,
    queryFactory: {
      characterQuery,
      commentQuery,
      episodeQuery,
      locationQuery
    },
    commandFactory: {
      characterCommand,
      commentCommand,
      episodeCommand,
      locationCommand
    }
  }
};

export default factory;
