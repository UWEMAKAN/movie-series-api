import GetEpisodeDetailQuery from './GetEpisodeDetailQuery';
import EpisodeModel from './EpisodeModel';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('GetEpisodeDetailQuery', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should return an object of type EpisodeModel', async () => {
    const id = 2;
    const query = new GetEpisodeDetailQuery(mockEntities.episodeRepository);
    const results = await query.execute(id);

    expect.assertions(3);
    expect(mockEntities.episodeRepository.getById).toHaveBeenCalledTimes(1);
    expect(results).toBeInstanceOf(EpisodeModel);
    expect(results).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      releaseDate: expect.any(Date),
      episodeCode: expect.any(String),
      Comments: expect.any(Array),
      characters: expect.any(Array),
      created: expect.any(Date)
    });
  });
});
