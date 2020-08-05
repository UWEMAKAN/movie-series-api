import ICreateLocationCommand from '../../../application/locations/commands/addLocationCommand/ICreateLocationCommand';
import IDeleteLocationCommand from '../../../application/locations/commands/removeLocationCommand/IDeleteLocationCommand';

export default interface ILocationCommandFactory {
  createLocationCommand: ICreateLocationCommand;
  deleteLocationCommand: IDeleteLocationCommand;
}
