import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import IEntity from '../common/IEntity';
import Character from '../characters/Character';
import Comment from '../comments/Comment';

@Entity()
class Episode implements IEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column()
  private releaseDate: Date;

  @Column()
  private episodeCode: string;

  @ManyToMany(() => Character, (character) => character.episodes)
  @JoinTable({ name: 'episode_character' })
  public characters: Array<Character>;

  @OneToMany(() => Comment, (comment: Comment) => comment.episode, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
  public comments: Array<Comment>;

  @Column()
  private created: Date;

  public set Created(v: Date) {
    this.created = v;
  }

  public get Created(): Date {
    return this.created;
  }

  public set Comments(v: Array<Comment>) {
    this.comments = v;
  }

  public get Comments(): Array<Comment> {
    return this.comments;
  }

  public set Characters(v: Array<Character>) {
    this.characters = v;
  }

  public get Characters(): Array<Character> {
    return this.characters;
  }

  public set EpisodeCode(v: string) {
    this.episodeCode = v;
  }

  public get EpisodeCode(): string {
    return this.episodeCode;
  }

  public set ReleaseDate(v: Date) {
    this.releaseDate = v;
  }

  public get ReleaseDate(): Date {
    return this.releaseDate;
  }

  public set Name(v: string) {
    this.name = v;
  }

  public get Name(): string {
    return this.name;
  }

  public set Id(v: number) {
    this.id = v;
  }

  public get Id(): number {
    return this.id;
  }
}

export default Episode;
