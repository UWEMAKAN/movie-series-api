import GetEpisodesListQuery from './GetEpisodesListQuery';
import EpisodeModel from './EpisodeModel';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('GetEpisodesListQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an Array of EpisodeModel', async () => {
    const query = new GetEpisodesListQuery(mockEntities.episodeRepository);
    const results = await query.execute();

    expect.assertions(4);
    expect(results).toBeInstanceOf(Array);
    expect(mockEntities.episodeRepository.getAll).toHaveBeenCalledTimes(1);
    expect(results[0]).toBeInstanceOf(EpisodeModel);
    expect(results[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      releaseDate: expect.any(Date),
      episodeCode: expect.any(String),
      episodeComments: expect.any(Array),
      characters: expect.any(Array),
      created: expect.any(Date)
    });
  });
});
