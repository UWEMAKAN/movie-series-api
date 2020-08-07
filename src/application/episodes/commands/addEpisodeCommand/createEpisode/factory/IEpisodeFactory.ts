import Character from '../../../../../../domain/characters/Character';
import Episode from '../../../../../../domain/episodes/Episode';
import Comment from '../../../../../../domain/comments/Comment';

export default interface IEpisodeFactory {
  create(
    name: string,
    releaseDate: Date,
    episodeCode: string,
    characters: Array<Character>,
    created: Date
  ): Episode;
}
