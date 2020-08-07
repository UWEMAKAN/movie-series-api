class CreateCommentModel {
  private comment: string;
  private ipAddressLocation: string;
  private episodeId: number;

  public set EpisodeId(v : number) {
    this.episodeId = v;
  }

  public get EpisodeId() : number {
    return this.episodeId;
  }

  public set IpAddressLocation(v : string) {
    this.ipAddressLocation = v;
  }

  public get IpAddressLocation() : string {
    return this.ipAddressLocation;
  }

  public set Comment(v : string) {
    this.comment = v;
  }

  public get Comment() : string {
    return this.comment;
  }
}

export default CreateCommentModel;
