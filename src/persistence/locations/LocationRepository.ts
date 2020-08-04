import Location from '../../domain/locations/Location';
import ILocationRepository from '../../application/interfaces/persistence/ILocationRepository';
import AbstractRepository from '../shared/AbstractRepository';

class LocationRepository extends AbstractRepository<Location> implements ILocationRepository {
  constructor(repositoryType: Function, createConnection: Function, connectionName: string) {
    super(repositoryType, createConnection, connectionName);
  }
}

export default LocationRepository;
