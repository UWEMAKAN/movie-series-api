import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import IEntity from '../common/IEntity';

@Entity()
class Location implements IEntity {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column()
  private name: string;

  @Column()
  private latitude: number;

  @Column()
  private longitude: number;

  @Column()
  private created: Date;

  public set Created(v : Date) {
    this.created = v;
  }

  public get Created() : Date {
    return this.created;
  }

  public set Name(v : string) {
    this.name = v;
  }

  public get Name() : string {
    return this.name;
  }

  public set Latitude(v : number) {
    this.latitude = v;
  }

  public get Latitude() : number {
    return this.latitude;
  }

  public set Longitude(v : number) {
    this.longitude = v;
  }

  public get Longitude() : number {
    return this.longitude;
  }

  public set Id(v : number) {
    this.id = v;
  }

  public get Id() : number {
    return this.id;
  }
}

export default Location;
