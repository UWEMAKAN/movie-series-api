import LocationModel from './LocationModel';
import Location from '../../../../domain/locations/Location';

export default interface ICreateLocationCommand {
  execute(model: LocationModel): Promise<Location>;
}
