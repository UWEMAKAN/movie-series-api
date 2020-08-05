import { Router } from 'express';
import LocationController from '../../controllers/locations/LocationsController';
import IFactory from '../../factory/IFactory';

function router(dependencies: IFactory): Router {
  const locationRouter: Router = Router();
  const controller = new LocationController(
    dependencies.queryFactory.getLocationListQuery,
    dependencies.queryFactory.getLocationDetailQuery,
  );
  locationRouter.route('/').get(controller.getAll);
  locationRouter.route('/:locationId').get(controller.getById)
  return locationRouter;
}

export default router;
