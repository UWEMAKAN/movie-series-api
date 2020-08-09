import LocationCommandFactory from './LocationCommandFactory';
import * as mockEntities from '../../../../tools/mockEntities';
import CreateLocationCommand from '../../../application/locations/commands/addLocationCommand/CreateLocationCommand';
import DeleteLocationCommand from '../../../application/locations/commands/removeLocationCommand/DeleteLocationCommand';

describe('LocationCommandFactory', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });

  it('should create an object with properties of type CreateLocationCommand and DeleteLocationCommand', () => {
    const locationFactoryCommand = new LocationCommandFactory(
      mockEntities.locationRepository
    );
    expect.assertions(2);
    expect(locationFactoryCommand.createLocationCommand).toBeInstanceOf(CreateLocationCommand);
    expect(locationFactoryCommand.deleteLocationCommand).toBeInstanceOf(DeleteLocationCommand);
  });
});
