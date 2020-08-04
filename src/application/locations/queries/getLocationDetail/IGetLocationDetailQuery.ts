import LocationModel from './LocationModel';

export default interface IGetLocationDetailQuery {
  execute(id: number): Promise<LocationModel>;
}
