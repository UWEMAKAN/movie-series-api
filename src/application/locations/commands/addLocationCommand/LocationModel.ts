
class LocationModel {
  private name: string;
  private latitude: number;
  private longitude: number;

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
}

export default LocationModel;
