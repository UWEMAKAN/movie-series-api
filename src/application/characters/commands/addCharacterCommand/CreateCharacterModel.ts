import Episode from '../../../../domain/episodes/Episode';
import CreateLocationModel from '../../../locations/commands/addLocationCommand/CreateLocationModel';

class CreateCharacterModel {
  private firstName: string;
  private lastName: string;
  private status: string;
  private stateOfOrigin: string;
  private gender: string;
  private location: CreateLocationModel;
  private episodes: Array<Episode>

  public set Episodes(v : Array<Episode>) {
    this.episodes = v;
  }

  public get Episodes() : Array<Episode> {
    return this.episodes;
  }

  public set Location(v : CreateLocationModel) {
    this.location = v;
  }

  public get Location() : CreateLocationModel {
    return this.location;
  }

  public set Gender(v : string) {
    this.gender = v;
  }

  public get Gender() : string {
    return this.gender;
  }

  public set StateOfOrigin(v : string) {
    this.stateOfOrigin = v;
  }

  public get StateOfOrigin() : string {
    return this.stateOfOrigin;
  }

  public set Status(v : string) {
    this.status = v;
  }

  public get Status() : string {
    return this.status;
  }

  public set FirstName(v : string) {
    this.firstName = v;
  }

  public get FirstName() : string {
    return this.firstName;
  }

  public set LastName(v : string) {
    this.lastName = v;
  }

  public get LastName() : string {
    return this.lastName;
  }
}

export default CreateCharacterModel;
