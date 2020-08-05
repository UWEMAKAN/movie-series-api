import Character from '../../domain/characters/Character';
import Comment from '../../domain/comments/Comment';
import Episode from '../../domain/episodes/Episode';
import Location from '../../domain/locations/Location';
import IRepositoryFactory from './IRepositoryFactory';
import ICharacterRepository from '../../application/interfaces/persistence/ICharacterRepository';
import ICommentRepository from '../../application/interfaces/persistence/ICommentRepository';
import IEpisodeRepository from '../../application/interfaces/persistence/IEpisodeRepository';
import ILocationRepository from '../../application/interfaces/persistence/ILocationRepository';
import CharacterRepository from '../../persistence/characters/CharacterRepository';
import CommentRepository from '../../persistence/comments/CommentRepository';
import EpisodeRepository from '../../persistence/episodes/EpisodeRepository';
import LocationRepository from '../../persistence/locations/LocationRepository';

class RepositoryFactory implements IRepositoryFactory {
  public readonly characterRepository: ICharacterRepository;
  public readonly commentRepository: ICommentRepository;
  public readonly episodeRepository: IEpisodeRepository;
  public readonly locationRepository: ILocationRepository;

  constructor(createConnection: Function, connectionName: string) {
    this.characterRepository = new CharacterRepository(Character, createConnection, connectionName);
    this.commentRepository = new CommentRepository(Comment, createConnection, connectionName);
    this.episodeRepository = new EpisodeRepository(Episode, createConnection, connectionName);
    this.locationRepository = new LocationRepository(Location, createConnection, connectionName);
  }
}

export default RepositoryFactory;
