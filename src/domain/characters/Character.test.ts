import Character from './Character';
import Location from '../locations/Location';
import * as mockData from '../../../tools/mockData';
import * as mockEntities from '../../../tools/mockEntities';

describe('Character Entity', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  
  it('should create an object of type Character', () => {
    const character = new Character();
    expect.assertions(1);
    expect(character).toBeInstanceOf(Character);
  });

  it('should create object of type Character and set all associated properties', () => {
    const data = mockData.characters[0];
    const character = new Character();
    character.Id = data.id;
    character.FirstName = data.firstName;
    character.LastName = data.lastName;
    character.Gender = data.gender;
    character.Status = data.status;
    character.StateOfOrigin = data.stateOfOrigin;
    character.Location = mockEntities.locations[0];
    character.Created = new Date();
    character.Episodes = [...mockEntities.episodes];
    expect.assertions(1);
    expect(character).toMatchObject({
      id: expect.any(Number),
      firstName: expect.any(String),
      lastName: expect.any(String),
      status: expect.any(String),
      stateOfOrigin: expect.any(String),
      gender: expect.any(String),
      location: expect.any(Location),
      episodes: expect.any(Array),
      created: expect.any(Date)
    });
  });
});
