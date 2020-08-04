import Location from '../../domain/locations/Location';
import LocationRepository from './LocationRepository';
import AbstractRepository from '../shared/AbstractRepository';
import { createConnection } from 'typeorm';

describe('LocationRepository', () => {
  it('should return a LocationRepository object', () => {
    const repository = new LocationRepository(Location, createConnection, 'test');
    expect.assertions(2);
    expect(repository).toBeInstanceOf(LocationRepository);
    expect(repository).toBeInstanceOf(AbstractRepository);
  });
});

