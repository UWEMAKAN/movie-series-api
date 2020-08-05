import { Request, Response, NextFunction } from 'express';
import ErrorHandler from '../../common/ErrorHandler';
import IGetLocationsListQuery from '../../application/locations/queries/getLocationsList/IGetLocationsListQuery';
import IGetLocationDetailQuery from '../../application/locations/queries/getLocationDetail/IGetLocationDetailQuery';

export default class SalesController {
  private readonly getLocationsListQuery: IGetLocationsListQuery;
  private readonly getLocationDetailQuery: IGetLocationDetailQuery;

  constructor(
    getLocationsListQuery: IGetLocationsListQuery,
    getLocationDetailQuery: IGetLocationDetailQuery
  ) {
    this.getLocationsListQuery = getLocationsListQuery;
    this.getLocationDetailQuery = getLocationDetailQuery;
  }

  public getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const response = await this.getLocationsListQuery.execute();
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }

  public getById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { locationId } = req.params;
      const id: number = Number.parseInt(locationId);
      const response = await this.getLocationDetailQuery.execute(id);
      return res.json(response);
    } catch (err) {
      err.status = 400;
      ErrorHandler(err, req, res, next);
    }
  }
}
