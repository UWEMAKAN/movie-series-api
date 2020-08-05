import DeleteLocationModel from './DeleteLocationModel';

export default interface IDeleteLocationCommand {
  execute(model: DeleteLocationModel): Promise<void>;
}
