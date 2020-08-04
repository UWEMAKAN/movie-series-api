import CreateEpisodeCommand from './CreateEpisodeCommand';
import Episode from '../../../../domain/episodes/Episode';
import * as mockEntities from '../../../../../tools/mockEntities';
import * as mockData from '../../../../../tools/mockData';
import CreateEpisodeModel from './CreateEpisodeModel';

const data = mockData.episodes[0];

describe('CreateEpisodeCommand', () => {
  it('execute should create a new object of type Episode and call episodeRepository.add to save it', async () => {
    const episodeModel = new CreateEpisodeModel();
    episodeModel.Name = data.name;
    episodeModel.ReleaseDate = new Date(data.releaseDate);
    episodeModel.EpisodeCode = data.episodeCode;
    episodeModel.Characters = mockEntities.characters;
    episodeModel.EpisodeComments = mockEntities.comments;
    const command = new CreateEpisodeCommand(mockEntities.episodeRepository);

    const response = await command.execute(episodeModel);
    expect.assertions(2);
    expect(mockEntities.episodeRepository.add).toHaveBeenCalledTimes(1);
    expect(response).toBeInstanceOf(Episode);
  });
});

