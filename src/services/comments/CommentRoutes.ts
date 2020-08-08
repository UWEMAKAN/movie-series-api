import { Router } from 'express';
import CommentsController from '../../controllers/comments/CommentsController';
import IFactory from '../../factory/IFactory';

function router(dependencies: IFactory): Router {
  const CommentRouter: Router = Router();
  const controller = new CommentsController(
    dependencies.queryFactory.commentQuery.getCommentsListQuery,
    dependencies.queryFactory.commentQuery.getCommentDetailQuery
  );
  CommentRouter.route('/')
    .get(controller.getAll);
  CommentRouter.route('/:commentId')
    .get(controller.getById);
  return CommentRouter;
}

export default router;
