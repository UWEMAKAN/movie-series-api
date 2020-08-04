import Episode from '../../../../domain/episodes/Episode';

class Comment {
  private comment: string;
  private ipAddressLocation: string;
  private episode: Episode;

  public set Episode(v : Episode) {
    this.episode = v;
  }

  public get Episode() : Episode {
    return this.episode;
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

export default Comment;
