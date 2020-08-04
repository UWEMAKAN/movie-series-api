import Episode from '../../domain/episodes/Episode';
import EpisodeRepository from './EpisodeRepository';
import AbstractRepository from '../shared/AbstractRepository';
import { createConnection } from 'typeorm';

describe('EpisodeRepository', () => {
  it('should return a EpisodeRepository object', () => {
    const repository = new EpisodeRepository(Episode, createConnection, 'test');
    expect.assertions(2);
    expect(repository).toBeInstanceOf(EpisodeRepository);
    expect(repository).toBeInstanceOf(AbstractRepository);
  });
});

