import LocationModel from './LocationModel';

export default interface IGetLocationsListQuery {
  execute(): Promise<Array<LocationModel>>;
}
