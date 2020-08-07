import { Router } from 'express';
import LocationsController from '../../controllers/locations/LocationsController';
import IFactory from '../../factory/IFactory';

function router(dependencies: IFactory): Router {
  const locationRouter: Router = Router();
  const controller = new LocationsController(
    dependencies.queryFactory.locationQuery.getLocationsListQuery,
    dependencies.queryFactory.locationQuery.getLocationDetailQuery
  );
  locationRouter.route('/')
    .get(controller.getAll);
  locationRouter.route('/:locationId').get(controller.getById);
  return locationRouter;
}

export default router;
