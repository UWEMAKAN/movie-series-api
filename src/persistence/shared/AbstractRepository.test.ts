import Location from '../../domain/locations/Location';
import AbstractRepository from './AbstractRepository';
import * as mockEntities from '../../../tools/mockEntities';
import * as typeorm from 'typeorm';

const location = new Location();
const locationId = 1;
const name = 'Daniel James';
location.Id = locationId;
location.Name = name;
const locations = [location];

jest.mock('typeorm', () => ({
  Entity: () => jest.fn(),
  Column: () => jest.fn(),
  OneToOne: () => jest.fn(),
  JoinColumn: () => jest.fn(),
  ManyToMany: () => jest.fn(),
  JoinTable: () => jest.fn(),
  OneToMany: () => jest.fn(),
  ManyToOne: () => jest.fn(),
  PrimaryGeneratedColumn: () => jest.fn(),
  createConnection: jest.fn(() => Promise.resolve({
    close: jest.fn().mockReturnValue(Promise.resolve()),
    getRepository: jest.fn(() => Promise.resolve({
      find: jest.fn(() => Promise.resolve(locations)),
      findOne: jest.fn((id: number) => Promise.resolve(location)),
      save: jest.fn().mockReturnValue(Promise.resolve()),
      remove: jest.fn().mockReturnValue(Promise.resolve())
    }))
  }))
}));

describe('AbstractRepository', () => {
  afterAll(() => {
    jest.clearAllMocks();
  });
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('test add location', async () => {
    const repository = new AbstractRepository(Location, typeorm.createConnection, 'test');
    await repository.add(mockEntities.locations[1]);
    expect.assertions(1);
    expect(typeorm.createConnection).toHaveBeenCalledTimes(1);
  });

  it('test remove location', async () => {
    const repository = new AbstractRepository(Location, typeorm.createConnection, 'test');
    await repository.remove(mockEntities.locations[1]);
    expect.assertions(1);
    expect(typeorm.createConnection).toHaveBeenCalledTimes(1);
  });

  it('test get all locations', async () => {
    const repository = new AbstractRepository(Location, typeorm.createConnection, 'test');
    const results = await repository.getAll();
    expect.assertions(3);
    expect(typeorm.createConnection).toHaveBeenCalledTimes(1);
    expect(results).toBeInstanceOf(Array);
    expect(results[0]).toEqual(location);
  });
  it('test get location', async () => {
    const repository = new AbstractRepository(Location, typeorm.createConnection, 'test');
    const id: number = 1;
    const result = await repository.get(id);
    expect.assertions(3);
    expect(typeorm.createConnection).toHaveBeenCalledTimes(1);
    expect(result).toBeInstanceOf(Location);
    expect(result).toEqual(location);
  });
});

