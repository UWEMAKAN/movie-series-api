import { Request, Response, NextFunction } from 'express';
import * as mockData from './mockData';
import Comment from '../src/domain/comments/Comment';
import Location from '../src/domain/locations/Location';
import Episode from '../src/domain/episodes/Episode';
import Character from '../src/domain/characters/Character';
import ICharacterRepository from '../src/application/interfaces/persistence/ICharacterRepository';
import IEpisodeRepository from '../src/application/interfaces/persistence/IEpisodeRepository';
import ILocationRepository from '../src/application/interfaces/persistence/ILocationRepository';
import ICommentRepository from '../src/application/interfaces/persistence/ICommentRepository';
import IGetLocationsListQuery from '../src/application/locations/queries/getLocationsList/IGetLocationsListQuery';
import IGetLocationDetailQuery from '../src/application/locations/queries/getLocationDetail/IGetLocationDetailQuery';
import ICreateLocationCommand from '../src/application/locations/commands/addLocationCommand/ICreateLocationCommand';
import IDeleteLocationCommand from '../src/application/locations/commands/removeLocationCommand/IDeleteLocationCommand';
import IGetCommentsListQuery from '../src/application/comments/queries/getCommentsListQuery/IGetCommentsListQuery';
import IGetCommentDetailQuery from '../src/application/comments/queries/getCommentDetailQuery/IGetCommentDetailQuery';
import ICreateCommentCommand from '../src/application/comments/commands/addCommentCommands/ICreateCommentCommand';
import IDeleteCommentCommand from '../src/application/comments/commands/removeCommentCommands/IDeleteCommentCommand';
import IGetEpisodesListQuery from '../src/application/episodes/queries/getEpisodeListQuery/IGetEpisodesListQuery';
import IGetEpisodeDetailQuery from '../src/application/episodes/queries/getEpisodeDetailQuery/IGetEpisodeDetailQuery';
import ICreateEpisodeCommand from '../src/application/episodes/commands/addEpisodeCommand/ICreateEpisodeCommand';
import IDeleteEpisodeCommand from '../src/application/episodes/commands/removeEpisodeCommands/IDeleteEpisodeCommand';
import IGetCharactersListQuery from '../src/application/characters/queries/getCharactersListQuery/IGetCharactersListQuery';
import IGetCharacterDetailQuery from '../src/application/characters/queries/getCharacterDetailQuery/IGetCharacterDetailQuery';
import ICreateCharacterCommand from '../src/application/characters/commands/addCharacterCommand/ICreateCharacterCommand';
import IDeleteCharacterCommand from '../src/application/characters/commands/removeCharacterCommand/IDeleteCharacterCommand';

const AllComments = mockData.comments.map((data) => {
  const comment = new Comment();
  comment.Id = data.id;
  comment.Comment = data.comment;
  comment.IpAddressLocation = data.ipAddressLocation;
  comment.Created = new Date();
  return comment;
});

const AllEpisodes = mockData.episodes.map((data) => {
  const episode = new Episode();
  episode.Id = data.id;
  episode.Name = data.name;
  episode.EpisodeCode = data.episodeCode;
  episode.ReleaseDate = new Date(data.releaseDate);
  episode.Created = new Date();
  return episode;
});

export const locations = mockData.locations.map((data) => {
  const location = new Location();
  location.Id = data.id;
  location.Name = data.name;
  location.Latitude = data.latitude;
  location.Longitude = data.longitude;
  location.Created = new Date();
  return location;
});

export const characters = mockData.characters.map((data, index) => {
  const character = new Character();
  character.Id = data.id;
  character.FirstName = data.firstName;
  character.LastName = data.lastName;
  character.Gender = data.gender;
  character.Status = data.status;
  character.StateOfOrigin = data.stateOfOrigin;
  character.Location = locations[index];
  character.Created = new Date();
  character.Episodes = [...AllEpisodes];
  return character;
});

export const episodes = AllEpisodes.map((episode) => {
  episode.Characters = [...characters];
  episode.EpisodeComments = [...AllComments];
  return episode;
});

export const comments = AllComments.map((comment, index) => {
  comment.Episode = episodes[index];
  return comment;
});

export const characterRepository: ICharacterRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(characters)),
  get: jest.fn((id: number) => Promise.resolve(characters[id])),
  add: jest.fn((character: Character) => {
    characters.push(character);
    return Promise.resolve(character);
  }),
  remove: jest.fn().mockReturnValue(Promise.resolve())
};

export const episodeRepository: IEpisodeRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(episodes)),
  get: jest.fn((id: number) => Promise.resolve(episodes[id])),
  add: jest.fn((episode: Episode) => {
    episodes.push(episode);
    return Promise.resolve(episode);
  }),
  remove: jest.fn().mockReturnValue(Promise.resolve())
};

export const locationRepository: ILocationRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(locations)),
  get: jest.fn((id: number) => Promise.resolve(locations[id])),
  add: jest.fn((location: Location) => {
    locations.push(location);
    return Promise.resolve(location);
  }),
  remove: jest.fn().mockReturnValue(Promise.resolve())
};

export const commentRepository: ICommentRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(comments)),
  get: jest.fn((id: number) => Promise.resolve(comments[id])),
  add: jest.fn((comment: Comment) => {
    comments.push(comment);
    return Promise.resolve(comment);
  }),
  remove: jest.fn().mockReturnValue(Promise.resolve())
};

/**
 * Character Queries and Commands
 */
export const getCharactersListQuery: IGetCharactersListQuery = {
  execute: jest.fn().mockReturnValue(Promise.resolve(characters))
};

export const getCharacterDetailQuery: IGetCharacterDetailQuery = {
  execute: jest.fn().mockReturnValue(Promise.resolve(characters[0]))
};

export const createCharacterCommand: ICreateCharacterCommand = {
  execute: jest.fn().mockReturnValue(Promise.resolve(characters[1]))
};

export const deleteCharacterCommand: IDeleteCharacterCommand = {
  execute: jest.fn().mockReturnValue(Promise.resolve())
};

/**
 * Location Queries and Commands
 */
export const getLocationsListQuery: IGetLocationsListQuery = {
  execute: jest.fn().mockReturnValue(Promise.resolve(locations))
};

export const getLocationDetailQuery: IGetLocationDetailQuery = {
  execute: jest.fn().mockReturnValue(Promise.resolve(locations[0]))
};

export const createLocationCommand: ICreateLocationCommand = {
  execute: jest.fn().mockReturnValue(Promise.resolve(locations[1]))
};

export const deleteLocationCommand: IDeleteLocationCommand = {
  execute: jest.fn().mockReturnValue(Promise.resolve())
};

/**
 * Comment Queries and Commands
 */
export const getCommentsListQuery: IGetCommentsListQuery = {
  execute: jest.fn().mockReturnValue(Promise.resolve(comments))
};

export const getCommentDetailQuery: IGetCommentDetailQuery = {
  execute: jest.fn().mockReturnValue(Promise.resolve(comments[0]))
};

export const createCommentCommand: ICreateCommentCommand = {
  execute: jest.fn().mockReturnValue(Promise.resolve(comments[1]))
};

export const deleteCommentCommand: IDeleteCommentCommand = {
  execute: jest.fn().mockReturnValue(Promise.resolve())
};

/**
 * Episode Queries and Commands
 */
export const getEpisodesListQuery: IGetEpisodesListQuery = {
  execute: jest.fn().mockReturnValue(Promise.resolve(episodes))
};

export const getEpisodeDetailQuery: IGetEpisodeDetailQuery = {
  execute: jest.fn().mockReturnValue(Promise.resolve(episodes[0]))
};

export const createEpisodeCommand: ICreateEpisodeCommand = {
  execute: jest.fn().mockReturnValue(Promise.resolve(episodes[1]))
};

export const deleteEpisodeCommand: IDeleteEpisodeCommand = {
  execute: jest.fn().mockReturnValue(Promise.resolve())
};

/**
 * Request, Response, NextFunction
 */
export const req = {
  params: {},
  body: {}
} as unknown as Request;

export const res = {
  locals: {},
  json: jest.fn((object) => Promise.resolve(object))
} as unknown as Response;

export const next = jest.fn() as NextFunction;

