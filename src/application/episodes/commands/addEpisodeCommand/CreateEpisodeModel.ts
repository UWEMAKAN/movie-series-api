class CreateEpisodeModel {
  private name: string;
  private releaseDate: Date;
  private episodeCode: string;
  private characterIds: Array<number>;

  public set CharacterIds(v : Array<number>) {
    this.characterIds = v;
  }

  public get CharacterIds() : Array<number> {
    return this.characterIds;
  }

  public set EpisodeCode(v : string) {
    this.episodeCode = v;
  }

  public get EpisodeCode() : string {
    return this.episodeCode;
  }

  public set ReleaseDate(v : Date) {
    this.releaseDate = v;
  }

  public get ReleaseDate() : Date {
    return this.releaseDate;
  }

  public set Name(v : string) {
    this.name = v;
  }

  public get Name() : string {
    return this.name;
  }
}

export default CreateEpisodeModel;
