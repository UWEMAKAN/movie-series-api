import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../../common/ErrorHandler';
import CreateCharacterModel from '../../application/characters/commands/addCharacterCommand/CreateCharacterModel';
import CreateLocationModel from '../../application/locations/commands/addLocationCommand/CreateLocationModel';
import DeleteCharacterModel from '../../application/characters/commands/removeCharacterCommand/DeleteCharacterModel';
import DeleteLocationModel from '../../application/locations/commands/removeLocationCommand/DeleteLocationModel';
import IGetCharactersListQuery from '../../application/characters/queries/getCharactersListQuery/IGetCharactersListQuery';
import IGetCharacterDetailQuery from '../../application/characters/queries/getCharacterDetailQuery/IGetCharacterDetailQuery';
import ICreateCharacterCommand from '../../application/characters/commands/addCharacterCommand/ICreateCharacterCommand';
import IDeleteCharacterCommand from '../../application/characters/commands/removeCharacterCommand/IDeleteCharacterCommand';
import ICreateLocationCommand from '../../application/locations/commands/addLocationCommand/ICreateLocationCommand';
import IDeleteLocationCommand from '../../application/locations/commands/removeLocationCommand/IDeleteLocationCommand';

export default class SalesController {
  private readonly getCharactersListQuery: IGetCharactersListQuery;
  private readonly getCharacterDetailQuery: IGetCharacterDetailQuery;
  private readonly createCharacterCommand: ICreateCharacterCommand;
  private readonly deleteCharacterCommand: IDeleteCharacterCommand;
  private readonly createLocationCommand: ICreateLocationCommand;
  private readonly deleteLocationCommand: IDeleteLocationCommand;

  constructor(
    getCharactersListQuery: IGetCharactersListQuery,
    getCharacterDetailQuery: IGetCharacterDetailQuery,
    createCharacterCommand: ICreateCharacterCommand,
    deleteCharacterCommand: IDeleteCharacterCommand,
    createLocationCommand: ICreateLocationCommand,
    deleteLocationCommand: IDeleteLocationCommand
  ) {
    this.getCharactersListQuery = getCharactersListQuery;
    this.getCharacterDetailQuery = getCharacterDetailQuery;
    this.createCharacterCommand = createCharacterCommand;
    this.deleteCharacterCommand = deleteCharacterCommand;
    this.createLocationCommand = createLocationCommand;
    this.deleteLocationCommand = deleteLocationCommand;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.getCharactersListQuery.execute();
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { characterId } = req.params;
      const id: number = Number.parseInt(characterId);
      const response = await this.getCharacterDetailQuery.execute(id);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }

  public create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { character, location } = req.body;
      const { latitude, longitude, name } = location;
      const locationModel = new CreateLocationModel();
      locationModel.Latitude = latitude;
      locationModel.Longitude = longitude;
      locationModel.Name = name;
      const createdLocation = await this.createLocationCommand.execute(locationModel);

      const { firstName, lastName, gender, stateOfOrigin, status, episodes } = character;
      const characterModel = new CreateCharacterModel();
      characterModel.FirstName = firstName;
      characterModel.LastName = lastName;
      characterModel.Gender = gender;
      characterModel.Location = createdLocation;
      characterModel.StateOfOrigin = stateOfOrigin;
      characterModel.Status = status;
      characterModel.Episodes = episodes;

      const response = await this.createCharacterCommand.execute(characterModel);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }

  public delete = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { characterId } = req.params;
      const id = Number(characterId);
      const character = await this.getCharacterDetailQuery.execute(id);
      const location = character.Location;

      const locationModel = new DeleteLocationModel();
      locationModel.Id = location.Id;
      locationModel.Name = location.Name;
      locationModel.Latitude = location.Latitude;
      locationModel.Longitude = location.Longitude;
      locationModel.Created = location.Created;
      await this.deleteLocationCommand.execute(locationModel);

      const characterModel = new DeleteCharacterModel();
      characterModel.Id = character.Id;
      characterModel.FirstName = character.FirstName;
      characterModel.LastName = character.LastName;
      characterModel.Gender = character.Gender;
      characterModel.Location = character.Location;
      characterModel.StateOfOrigin = character.StateOfOrigin;
      characterModel.Status = character.Status;
      characterModel.Created = character.Created;
      characterModel.Episodes = character.Episodes;
      await this.deleteCharacterCommand.execute(characterModel);
      return res.json();
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }
}
