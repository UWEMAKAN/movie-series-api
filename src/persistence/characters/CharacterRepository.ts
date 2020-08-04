import Character from '../../domain/characters/Character';
import ICharacterRepository from '../../application/interfaces/persistence/ICharacterRepository';
import AbstractRepository from '../shared/AbstractRepository';

class CharacterRepository extends AbstractRepository<Character> implements ICharacterRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }
}

export default CharacterRepository;
