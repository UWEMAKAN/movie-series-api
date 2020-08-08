import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../../common/ErrorHandler';
import { sortAndCount, searchCharacterEpisodesFeatures } from './utils';
import CreateEpisodeModel from '../../application/episodes/commands/addEpisodeCommand/CreateEpisodeModel';
import CreateCommentModel from '../../application/comments/commands/addCommentCommand/CreateCommentModel';
import DeleteCommentModel from '../../application/comments/commands/removeCommentCommand/DeleteCommentModel';
import IGetEpisodesListQuery from '../../application/episodes/queries/getEpisodeListQuery/IGetEpisodesListQuery';
import IGetEpisodeDetailQuery from '../../application/episodes/queries/getEpisodeDetailQuery/IGetEpisodeDetailQuery';
import ICreateEpisodeCommand from '../../application/episodes/commands/addEpisodeCommand/ICreateEpisodeCommand';
import IDeleteEpisodeCommand from '../../application/episodes/commands/removeEpisodeCommand/IDeleteEpisodeCommand';
import ICreateCommentCommand from '../../application/comments/commands/addCommentCommand/ICreateCommentCommand';
import IDeleteCommentCommand from '../../application/comments/commands/removeCommentCommand/IDeleteCommentCommand';
import DeleteEpisodeModel from '../../application/episodes/commands/removeEpisodeCommand/DeleteEpisodeModel';
import { sortAndFilterCharacters } from '../characters/utils';

export default class EpisodesController {
  private readonly getEpisodesListQuery: IGetEpisodesListQuery;
  private readonly getEpisodeDetailQuery: IGetEpisodeDetailQuery;
  private readonly createEpisodeCommand: ICreateEpisodeCommand;
  private readonly deleteEpisodeCommand: IDeleteEpisodeCommand;
  private readonly createCommentCommand: ICreateCommentCommand;
  private readonly deleteCommentCommand: IDeleteCommentCommand;

  constructor(
    getEpisodesListQuery: IGetEpisodesListQuery,
    getEpisodeDetailQuery: IGetEpisodeDetailQuery,
    createEpisodeCommand: ICreateEpisodeCommand,
    deleteEpisodeCommand: IDeleteEpisodeCommand,
    createCommentCommand: ICreateCommentCommand,
    deleteCommentCommand: IDeleteCommentCommand
  ) {
    this.getEpisodesListQuery = getEpisodesListQuery;
    this.getEpisodeDetailQuery = getEpisodeDetailQuery;
    this.createEpisodeCommand = createEpisodeCommand;
    this.deleteEpisodeCommand = deleteEpisodeCommand;
    this.createCommentCommand = createCommentCommand;
    this.deleteCommentCommand = deleteCommentCommand;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { character } = req.query;
      let response = await this.getEpisodesListQuery.execute();
      if (character && Number.parseInt(character as string)) {
        const id = Number.parseInt(character as string);
        response = searchCharacterEpisodesFeatures(response, id);
      }
      const episodes = sortAndCount(response);
      return res.json(episodes);
    } catch (err) {
      err.status = 400;
      console.log(err);
      ErrorHandler(err, req, res, next);
    }
  };

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { episodeId } = req.params;
      const id: number = Number.parseInt(episodeId);
      const response = await this.getEpisodeDetailQuery.execute(id);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  };

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { episode } = req.body;
      const { name, episodeCode, releaseDate, characterIds } = episode;
      const episodeModel = new CreateEpisodeModel();
      episodeModel.Name = name;
      episodeModel.EpisodeCode = episodeCode;
      episodeModel.ReleaseDate = releaseDate;
      episodeModel.CharacterIds = characterIds;

      const response = await this.createEpisodeCommand.execute(episodeModel);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      // ErrorHandler(err, req, res, next);
      res.json('Failed');
    }
  };

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { episodeId } = req.params;
      const id = Number(episodeId);
      const episode = await this.getEpisodeDetailQuery.execute(id);
      const episodeComments = episode.Comments;

      const commentModels = episodeComments.map((episodeComment) => {
        const model = new DeleteCommentModel();
        model.Comment = episodeComment.Comment;
        model.Created = episodeComment.Created;
        model.Id = episodeComment.Id;
        model.IpAddressLocation = episodeComment.IpAddressLocation;
      });
      const episodeModel = new DeleteEpisodeModel();
      episodeModel.Created = episode.Created;
      episodeModel.EpisodeCode = episode.EpisodeCode;
      episodeModel.Name = episode.Name;
      episodeModel.Id = episode.Id;
      episodeModel.ReleaseDate = episode.ReleaseDate;
      await this.deleteEpisodeCommand.execute(episodeModel);
      return res.json();
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  };

  public createComment = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { commentData } = req.body;
      const { episodeId } = req.params;
      const { comment, ipAddressLocation } = commentData;
      const id = Number(episodeId);
      const commentModel = new CreateCommentModel();
      commentModel.EpisodeId = id;
      commentModel.IpAddressLocation = ipAddressLocation;
      commentModel.Comment = comment;

      const response = await this.createCommentCommand.execute(commentModel);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  };

  // public deleteComment = async (req: Request, res: Response, next: NextFunction) => {
  //   try {
  //     const { episodeId, commentId } = req.params;
  //     const id = Number(episodeId);
  //     const commentModel = new CreateCommentModel();
  //     commentModel.EpisodeId = id;
  //     commentModel.IpAddressLocation = ipAddressLocation;
  //     commentModel.Comment = comment;

  //     const response = await this.createCommentCommand.execute(commentModel);
  //     return res.json(response);
  //   } catch (err) {
  //     err.status = 400;
  //     ErrorHandler(err, req, res, next);
  //   }
  // }
}
