import IRepository from './IRepository';
import Character from '../../../domain/characters/Character';

export default interface ICharacterRepository extends IRepository<Character> {
  getById(id: number): Promise<Character>;
}
