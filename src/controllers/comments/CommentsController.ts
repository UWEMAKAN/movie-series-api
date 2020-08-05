import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../../common/ErrorHandler';
import CreateCommentModel from '../../application/comments/commands/addCommentCommands/CreateCommentModel';
import DeleteCommentModel from '../../application/comments/commands/removeCommentCommands/DeleteCommentModel';
import IGetCommentsListQuery from '../../application/comments/queries/getCommentsListQuery/IGetCommentsListQuery';
import IGetCommentDetailQuery from '../../application/comments/queries/getCommentDetailQuery/IGetCommentDetailQuery';
import ICreateCommentCommand from '../../application/comments/commands/addCommentCommands/ICreateCommentCommand';
import IDeleteCommentCommand from '../../application/comments/commands/removeCommentCommands/IDeleteCommentCommand';

export default class SalesController {
  private readonly getCommentsListQuery: IGetCommentsListQuery;
  private readonly getCommentDetailQuery: IGetCommentDetailQuery;
  private readonly createCommentCommand: ICreateCommentCommand;
  private readonly deleteCommentCommand: IDeleteCommentCommand;

  constructor(
    getCommentsListQuery: IGetCommentsListQuery,
    getCommentDetailQuery: IGetCommentDetailQuery,
    createCommentCommand: ICreateCommentCommand,
    deleteCommentCommand: IDeleteCommentCommand
  ) {
    this.getCommentsListQuery = getCommentsListQuery;
    this.getCommentDetailQuery = getCommentDetailQuery;
    this.createCommentCommand = createCommentCommand;
    this.deleteCommentCommand = deleteCommentCommand;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.getCommentsListQuery.execute();
      return res.json(response);
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

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { comment, episode, ipAddressLocation } = req.body;
      const model = new CreateCommentModel();
      model.Comment = comment;
      model.Episode = episode;
      model.IpAddressLocation = ipAddressLocation;
      const response = await this.createCommentCommand.execute(model);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { comment, episode, ipAddressLocation } = req.body;
      const model = new CreateCommentModel();
      model.Comment = comment;
      model.Episode = episode;
      model.IpAddressLocation = ipAddressLocation;
      const response = await this.createCommentCommand.execute(model);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }
}
