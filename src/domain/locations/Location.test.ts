import Location from './Location';
import * as mockData from '../../../tools/mockData';

describe('Location Entity', () => {
  it('should create object of type Location', () => {
    const location = new Location();
    expect.assertions(1);
    expect(location).toBeInstanceOf(Location);
  });

  it('should create an object of type Location and set properties', () => {
    const data = mockData.locations[0];
    const location = new Location();
    location.Id = data.id;
    location.Name = data.name;
    location.Latitude = data.latitude;
    location.Longitude = data.longitude;
    location.Created = new Date();
    expect.assertions(1);
    expect(location).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
      latitude: expect.any(Number),
      longitude: expect.any(Number),
      created: expect.any(Date)
    });
  });
});
