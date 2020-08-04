import * as mockData from './mockData';
import Comment from '../src/domain/comments/Comment';
import Location from '../src/domain/locations/Location';
import Episode from '../src/domain/episodes/Episode';
import Character from '../src/domain/characters/Character';
import ICharacterRepository from '../src/application/interfaces/persistence/ICharacterRepository';
import IEpisodeRepository from '../src/application/interfaces/persistence/IEpisodeRepository';
import ILocationRepository from '../src/application/interfaces/persistence/ILocationRepository';
import ICommentRepository from '../src/application/interfaces/persistence/ICommentRepository';

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
    return Promise.resolve();
  }),
  remove: jest.fn().mockReturnValue(Promise.resolve())
};

export const episodeRepository: IEpisodeRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(episodes)),
  get: jest.fn((id: number) => Promise.resolve(episodes[id])),
  add: jest.fn((episode: Episode) => {
    episodes.push(episode);
    return Promise.resolve();
  }),
  remove: jest.fn().mockReturnValue(Promise.resolve())
};

export const locationRepository: ILocationRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(locations)),
  get: jest.fn((id: number) => Promise.resolve(locations[id])),
  add: jest.fn((location: Location) => {
    locations.push(location);
    return Promise.resolve();
  }),
  remove: jest.fn().mockReturnValue(Promise.resolve())
};

export const commentRepository: ICommentRepository = {
  getAll: jest.fn().mockReturnValue(Promise.resolve(comments)),
  get: jest.fn((id: number) => Promise.resolve(comments[id])),
  add: jest.fn((comment: Comment) => {
    comments.push(comment);
    return Promise.resolve();
  }),
  remove: jest.fn().mockReturnValue(Promise.resolve())
};
