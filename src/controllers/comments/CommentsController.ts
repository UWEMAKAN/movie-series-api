import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../../common/ErrorHandler';
import { sortComments } from './utils';
import IGetCommentsListQuery from '../../application/comments/queries/getCommentsListQuery/IGetCommentsListQuery';
import IGetCommentDetailQuery from '../../application/comments/queries/getCommentDetailQuery/IGetCommentDetailQuery';

export default class CommentsController {
  private readonly getCommentsListQuery: IGetCommentsListQuery;
  private readonly getCommentDetailQuery: IGetCommentDetailQuery;

  constructor(
    getCommentsListQuery: IGetCommentsListQuery,
    getCommentDetailQuery: IGetCommentDetailQuery,
  ) {
    this.getCommentsListQuery = getCommentsListQuery;
    this.getCommentDetailQuery = getCommentDetailQuery;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.getCommentsListQuery.execute();
      const comments = sortComments(response);
      return res.json(comments);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { commentId } = req.params;
      const id: number = Number.parseInt(commentId);
      const response = await this.getCommentDetailQuery.execute(id);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }
}
