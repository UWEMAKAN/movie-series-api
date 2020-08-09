import DeleteEpisodeCommand from './DeleteEpisodeCommand';
import DeleteEpisodeModel from './DeleteEpisodeModel';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('DeleteEpisodeCommand', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('execute should create a new object of type Episode and call episodeRepository.add to save it', async () => {
    const episode = mockEntities.episodes[0];
    const model = new DeleteEpisodeModel();
    model.Id = episode.Id;
    model.Name = episode.Name;
    model.ReleaseDate = episode.ReleaseDate;
    model.EpisodeCode = episode.EpisodeCode;
    model.Comments = episode.Comments;
    model.Characters = episode.Characters;
    model.Created = episode.Created;
    const command = new DeleteEpisodeCommand(mockEntities.episodeRepository);

    await command.execute(model);
    expect.assertions(1);
    expect(mockEntities.episodeRepository.remove).toHaveBeenCalledTimes(1);
  });
});

