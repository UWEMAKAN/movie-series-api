import DeleteLocationCommand from './DeleteLocationCommand';
import * as mockEntities from '../../../../../tools/mockEntities';
import * as mockData from '../../../../../tools/mockData';
import Location from '../../../../domain/locations/Location';

const data = mockData.locations[0];

describe('DeleteLocationCommand', () => {
  it('execute should create a new object of type Location and call locationRepository.add to save it', async () => {
    const location = new Location();
    location.Id = data.id;
    location.Name = data.name;
    location.Latitude = data.latitude;
    location.Longitude = data.longitude;
    location.Created = new Date();
    const command = new DeleteLocationCommand(mockEntities.locationRepository);

    await command.execute(location);
    expect.assertions(1);
    expect(mockEntities.locationRepository.remove).toHaveBeenCalledTimes(1);
  });
});
