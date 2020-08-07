import { Router } from 'express';
import IFactory from '../factory/IFactory';
import locationRoutes from './locations/LocationRoutes';
import characterRoutes from './characters/CharacterRoutes';
import episodeRoutes from './episodes/EpisodeRoutes';

function apiRouter(dependencies: IFactory): Router {
  const routes = Router();

  const locationRouter = locationRoutes(dependencies);
  const characterRouter = characterRoutes(dependencies);
  const episodeRouter = episodeRoutes(dependencies);

  routes.use('/locations', locationRouter);
  routes.use('/characters', characterRouter);
  routes.use('/episodes', episodeRouter);

  return routes;
};

export default apiRouter;
