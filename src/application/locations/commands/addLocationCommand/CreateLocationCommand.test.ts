import LocationModel from './LocationModel';
import CreateLocationCommand from './CreateLocationCommand';
import * as mockEntities from '../../../../../tools/mockEntities';
import * as mockData from '../../../../../tools/mockData';

const data = mockData.locations[0];

describe('CreateLocationCommand', () => {
  it('execute should create a new object of type Location and call locationRepository.add to save it', async () => {
    const locationModel = new LocationModel();
    locationModel.Name = data.name;
    locationModel.Latitude = data.latitude;
    locationModel.Longitude = data.longitude;
    const command = new CreateLocationCommand(mockEntities.locationRepository);

    await command.execute(locationModel);
    expect.assertions(1);
    expect(mockEntities.locationRepository.add).toHaveBeenCalledTimes(1);
  });
});
