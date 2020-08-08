import EpisodeModel from '../../application/episodes/queries/getEpisodeListQuery/EpisodeModel';;

export const sortEpisodes = (episodes: Array<EpisodeModel>) => {
  return episodes.sort((a, b) => {
    return Number(a.ReleaseDate) - Number(b.ReleaseDate);
  });
};

export const countComments = (episodes: Array<EpisodeModel>) => {
  const commentsCount = episodes.map((e) => {
    const episode = Object.create({});
    episode.commentCount = e.Comments.length;
    episode.characters = e.Characters
    episode.comments = e.Comments;
    episode.created = e.Created;
    episode.episodeCode = e.EpisodeCode;
    episode.id = e.Id;
    episode.name = e.Name;
    episode.releaseDate = e.ReleaseDate;
    return episode;
  });
  return commentsCount;
};

export const searchCharacterEpisodesFeatures = (episodes: Array<EpisodeModel>, id: number) => {
   return episodes.filter((e) => {
    if (e.Characters.some((c) => c.Id === id))
      return e;
  });
}

export const sortAndCount = (episodes: Array<EpisodeModel>) => {
  episodes = sortEpisodes(episodes);
  return countComments(episodes);
};


