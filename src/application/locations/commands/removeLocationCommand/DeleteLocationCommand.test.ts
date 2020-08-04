import DeleteLocationCommand from './DeleteLocationCommand';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('DeleteLocationCommand', () => {
  it('execute should create a new object of type Location and call locationRepository.add to save it', async () => {
    const location = mockEntities.locations[0];
    const command = new DeleteLocationCommand(mockEntities.locationRepository);
    await command.execute(location);
    expect.assertions(1);
    expect(mockEntities.locationRepository.remove).toHaveBeenCalledTimes(1);
  });
});
