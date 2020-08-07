import IEpisodeFactory from './IEpisodeFactory';
import Character from '../../../../../../domain/characters/Character';
import Episode from '../../../../../../domain/episodes/Episode';

class EpisodeFactory implements IEpisodeFactory {
  public create(
    name: string,
    releaseDate: Date,
    episodeCode: string,
    characters: Array<Character>,
    created: Date
  ): Episode {
    const episode = new Episode();
    episode.Name = name;
    episode.ReleaseDate = releaseDate;
    episode.EpisodeCode = episodeCode;
    episode.EpisodeComments = [];
    episode.Characters = characters;
    episode.Created = created;
    return episode;
  }
}

export default EpisodeFactory;
