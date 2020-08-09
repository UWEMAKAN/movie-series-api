import { createConnection } from 'typeorm';
import Character from '../../domain/characters/Character';
import CharacterRepository from './CharacterRepository';
import AbstractRepository from '../shared/AbstractRepository';

describe('CharacterRepository', () => {
  it('should return a CharacterRepository object', () => {
    const repository = new CharacterRepository(Character, createConnection, 'test');
    expect.assertions(2);
    expect(repository).toBeInstanceOf(CharacterRepository);
    expect(repository).toBeInstanceOf(AbstractRepository);
  });
});

