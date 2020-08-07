import { Router } from 'express';
import EpisodeController from '../../controllers/episodes/EpisodesController';
import IFactory from '../../factory/IFactory';

function router(dependencies: IFactory): Router {
  const episodeRouter: Router = Router();
  const controller = new EpisodeController(
    dependencies.queryFactory.episodeQuery.getEpisodesListQuery,
    dependencies.queryFactory.episodeQuery.getEpisodeDetailQuery,
    dependencies.commandFactory.episodeCommand.createEpisodeCommand,
    dependencies.commandFactory.episodeCommand.deleteEpisodeCommand,
    dependencies.commandFactory.commentCommand.createCommentCommand,
    dependencies.commandFactory.commentCommand.deleteCommentCommand
  );
  episodeRouter.route('/')
    .get(controller.getAll)
    .post(controller.create);
  episodeRouter.route('/:episodeId')
    .get(controller.getById)
    .delete(controller.delete);
  episodeRouter.route('/:episodeId/comments')
    .post(controller.createComment)
  return episodeRouter;
}

export default router;
