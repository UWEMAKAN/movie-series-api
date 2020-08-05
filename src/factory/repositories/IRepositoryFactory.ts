import ICharacterRepository from '../../application/interfaces/persistence/ICharacterRepository';
import ICommentRepository from '../../application/interfaces/persistence/ICommentRepository';
import IEpisodeRepository from '../../application/interfaces/persistence/IEpisodeRepository';
import ILocationRepository from '../../application/interfaces/persistence/ILocationRepository';

export default interface IRepositoryFactory {
  characterRepository: ICharacterRepository;
  commentRepository: ICommentRepository;
  episodeRepository: IEpisodeRepository;
  locationRepository: ILocationRepository;
}
