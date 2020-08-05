import DeleteLocationCommand from './DeleteLocationCommand';
import DeleteLocationModel from './DeleteLocationModel';
import * as mockEntities from '../../../../../tools/mockEntities';

describe('DeleteLocationCommand', () => {
  it('execute should delete the given location by calling locationRepository.remove', async () => {
    const location = mockEntities.locations[0];
    const model = new DeleteLocationModel();
    model.Id = location.Id;
    model.Name = location.Name;
    model.Latitude = location.Latitude;
    model.Longitude = location.Longitude;
    model.Created = location.Created;
    const command = new DeleteLocationCommand(mockEntities.locationRepository);
    await command.execute(model);
    expect.assertions(1);
    expect(mockEntities.locationRepository.remove).toHaveBeenCalledTimes(1);
  });
});
