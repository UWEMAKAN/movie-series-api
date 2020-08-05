import DeleteCharacterModel from './DeleteCharacterModel';

export default interface ICreateCharacterCommand {
  execute(model: DeleteCharacterModel): Promise<void>;
}
