import LocationModel from './CreateLocationModel';
import Location from '../../../../domain/locations/Location';

export default interface ICreateLocationCommand {
  execute(model: LocationModel): Promise<Location>;
}
