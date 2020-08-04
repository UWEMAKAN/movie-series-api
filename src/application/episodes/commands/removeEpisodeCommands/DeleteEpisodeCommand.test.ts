import DeleteEpisodeCommand from './DeleteEpisodeCommand';
import * as mockEntities from '../../../../../tools/mockEntities';
import * as mockData from '../../../../../tools/mockData';

describe('DeleteEpisodeCommand', () => {
  it('execute should create a new object of type Episode and call episodeRepository.add to save it', async () => {
    const episode = mockEntities.episodes[0];
    const command = new DeleteEpisodeCommand(mockEntities.episodeRepository);

    await command.execute(episode);
    expect.assertions(1);
    expect(mockEntities.episodeRepository.remove).toHaveBeenCalledTimes(1);
  });
});

