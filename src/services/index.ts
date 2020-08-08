import { Router } from 'express';
import IFactory from '../factory/IFactory';
import locationRoutes from './locations/LocationRoutes';
import characterRoutes from './characters/CharacterRoutes';
import episodeRoutes from './episodes/EpisodeRoutes';
import commentRoutes from './comments/CommentRoutes';

function apiRouter(dependencies: IFactory): Router {
  const routes = Router();

  const locationRouter = locationRoutes(dependencies);
  const characterRouter = characterRoutes(dependencies);
  const episodeRouter = episodeRoutes(dependencies);
  const commentRouter = commentRoutes(dependencies);

  routes.use('/locations', locationRouter);
  routes.use('/characters', characterRouter);
  routes.use('/episodes', episodeRouter);
  routes.use('/comments', commentRouter);

  return routes;
};

export default apiRouter;
