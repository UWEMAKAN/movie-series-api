import Episode from './Episode';
import * as mockData from '../../../tools/mockData';
import * as mockEntities from '../../../tools/mockEntities';

describe('Episode Entity', () => {
  it('should create and return an object of type Episode', () => {
    const episode = new Episode();
    expect.assertions(1);
    expect(episode).toBeInstanceOf(Episode);
  });

  it('should create an object of type Episode and set it\'s properties', () => {
    const data = mockData.episodes[0];
    const episode = new Episode();
    episode.Id = data.id;
    episode.Name = data.name;
    episode.EpisodeCode = data.episodeCode;
    episode.ReleaseDate = new Date(data.releaseDate);
    episode.Created = new Date();
    episode.Characters = [...mockEntities.characters];
    episode.Comments = [...mockEntities.comments];
    expect.assertions(1);
    expect(episode).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      episodeCode: expect.any(String),
      releaseDate: expect.any(Date),
      characters: expect.any(Array),
      comments: expect.any(Array),
      created: expect.any(Date)
    });
  });
});
