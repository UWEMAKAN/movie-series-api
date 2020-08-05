import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable } from 'typeorm';
import IEntity from '../common/IEntity';
import Episode from '../episodes/Episode';
import Location from '../locations/Location';

@Entity()
class Character implements IEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private firstName: string;

  @Column()
  private lastName: string;

  @Column()
  private status: string;

  @Column()
  private stateOfOrigin: string;

  @Column()
  private gender: string;

  @OneToOne(type => Location)
  @JoinColumn()
  private location: Location;

  @ManyToMany(type => Episode, (episode) => episode.Characters)
  private episodes: Array<Episode>

  @Column()
  private created: Date;

  public set Created(v : Date) {
    this.created = v;
  }

  public get Created() : Date {
    return this.created;
  }

  public set Episodes(v : Array<Episode>) {
    this.episodes = v;
  }

  public get Episodes() : Array<Episode> {
    return this.episodes;
  }

  public set Location(v : Location) {
    this.location = v;
  }

  public get Location() : Location {
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

  public set Id(v : number) {
    this.id = v;
  }

  public get Id() : number {
    return this.id;
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

export default Character;
