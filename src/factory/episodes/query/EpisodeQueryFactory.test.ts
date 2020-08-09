import EpisodeQueryFactory from './EpisodeQueryFactory';
import * as mockEntities from '../../../../tools/mockEntities';
import GetEpisodesListQuery from '../../../application/episodes/queries/getEpisodeListQuery/GetEpisodesListQuery';
import GetEpisodeDetailQuery from '../../../application/episodes/queries/getEpisodeDetailQuery/GetEpisodeDetailQuery';

describe('EpisodeQueryFactory', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should create an object with properties of type GetEpisodesListQuery and GetEpisodeDetailQuery', () => {
    const episodeQueryFactory = new EpisodeQueryFactory(
      mockEntities.episodeRepository
    );
    expect.assertions(1);
    expect(episodeQueryFactory).toMatchObject({
      getEpisodesListQuery: expect.any(GetEpisodesListQuery),
      getEpisodeDetailQuery: expect.any(GetEpisodeDetailQuery)
    });
  });
});
