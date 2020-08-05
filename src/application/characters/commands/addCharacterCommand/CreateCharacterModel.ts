class CreateCharacterModel {
  private firstName: string;
  private lastName: string;
  private status: string;
  private stateOfOrigin: string;
  private gender: string;
  private locationId: number;
  private episodeIds: Array<number>

  public set EpisodeIds(v : Array<number>) {
    this.episodeIds = v;
  }

  public get EpisodeIds() : Array<number> {
    return this.episodeIds;
  }

  public set LocationId(v : number) {
    this.locationId = v;
  }

  public get LocationId() : number {
    return this.locationId;
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
