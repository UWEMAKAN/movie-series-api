import ICreateCommentCommand from './ICreateCommentCommand';
import CreateCommentModel from './CreateCommentModel';
import ICommentRepository from '../../../interfaces/persistence/ICommentRepository';
import Comment from '../../../../domain/comments/Comment';
import IEpisodeRepository from '../../../interfaces/persistence/IEpisodeRepository';

class CreateCommentCommand implements ICreateCommentCommand {
  private readonly commentRepository: ICommentRepository;
  private readonly episodeRepository: IEpisodeRepository;

  constructor(
    commentRepository: ICommentRepository,
    episodeRepository: IEpisodeRepository
    ) {
    this.commentRepository = commentRepository;
    this.episodeRepository = episodeRepository;
  }

  public async execute(model: CreateCommentModel): Promise<Comment> {
    const comment = new Comment();
    const episode = await this.episodeRepository.get(model.EpisodeId);
    comment.Episode = episode;
    comment.IpAddressLocation = model.IpAddressLocation;
    comment.Comment = model.Comment;
    comment.Created = new Date();
    return this.commentRepository.add(comment);
  }
}

export default CreateCommentCommand;
