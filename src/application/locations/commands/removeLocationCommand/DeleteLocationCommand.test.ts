import DeleteLocationCommand from './DeleteLocationCommand';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('DeleteLocationCommand', () => {
  it('execute should delete object locationRepository.remove', async () => {
    const location = mockEntities.locations[0];
    const command = new DeleteLocationCommand(mockEntities.locationRepository);
    await command.execute(location);
    expect.assertions(1);
    expect(mockEntities.locationRepository.remove).toHaveBeenCalledTimes(1);
  });
});
