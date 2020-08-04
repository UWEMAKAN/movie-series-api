import Character from '../../../../domain/characters/Character';
import Comment from '../../../../domain/comments/Comment';

class Episode {
  private id: number;
  private name: string;
  private releaseDate: Date;
  private episodeCode: string;
  private characters: Array<Character>
  private episodeComments: Array<Comment>;
  private created: Date;

  public set Created(v : Date) {
    this.created = v;
  }

  public get Created() : Date {
    return this.created;
  }

  public set EpisodeComments(v : Array<Comment>) {
    this.episodeComments = v;
  }

  public get EpisodeComments() : Array<Comment> {
    return this.episodeComments;
  }

  public set Characters(v : Array<Character>) {
    this.characters = v;
  }

  public get Characters() : Array<Character> {
    return this.characters;
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

  public set Id(v : number) {
    this.id = v;
  }

  public get Id() : number {
    return this.id;
  }
}

export default Episode;
