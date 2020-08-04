import Character from '../../../../domain/characters/Character';

export default interface ICreateCharacterCommand {
  execute(model: Character): Promise<void>;
}
