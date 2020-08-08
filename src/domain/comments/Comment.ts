import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import IEntity from '../common/IEntity';
import Episode from '../episodes/Episode';

@Entity()
class Comment implements IEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private comment: string;

  @Column()
  private ipAddressLocation: string;

  @ManyToOne(() => Episode, (episode: Episode) => episode.comments)
  public episode: Episode;

  @Column()
  private created: Date;

  public set Created(v: Date) {
    this.created = v;
  }

  public get Created(): Date {
    return this.created;
  }

  public set Episode(v: Episode) {
    this.episode = v;
  }

  public get Episode(): Episode {
    return this.episode;
  }

  public set IpAddressLocation(v: string) {
    this.ipAddressLocation = v;
  }

  public get IpAddressLocation(): string {
    return this.ipAddressLocation;
  }

  public set Comment(v: string) {
    this.comment = v;
  }

  public get Comment(): string {
    return this.comment;
  }

  public set Id(v: number) {
    this.id = v;
  }

  public get Id(): number {
    return this.id;
  }
}

export default Comment;
