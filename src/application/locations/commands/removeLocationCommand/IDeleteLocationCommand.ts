import Location from '../../../../domain/locations/Location';

export default interface IDeleteLocationCommand {
  execute(entity: Location): Promise<void>;
}
