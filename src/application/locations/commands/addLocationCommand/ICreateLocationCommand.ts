import LocationModel from './LocationModel';

export default interface ICreateLocationCommand {
  execute(model: LocationModel): Promise<void>;
}
