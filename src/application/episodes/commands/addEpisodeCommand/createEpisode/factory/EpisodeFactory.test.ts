import EpisodeFactory from './EpisodeFactory';
import Episode from '../../../../../../domain/episodes/Episode';
import * as mockData from '../../../../../../../tools/mockData';
import * as mockEntities from '../../../../../../../tools/mockEntities';

describe('SaleFactory', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should create a Character object', () => {
    const factory = new EpisodeFactory();
    const episodes = mockEntities.episodes;
    const location = mockEntities.locations[3];
    const created = new Date();
    const data = mockData.episodes[0];
    const episode = factory.create(
      data.name,
      new Date(data.releaseDate),
      data.episodeCode,
      mockEntities.characters,
      created
    );
    expect.assertions(1);
    expect(episode).toBeInstanceOf(Episode);
  });
});
