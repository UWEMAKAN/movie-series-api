import * as mockData from './mockData';
import Comment from '../src/domain/comments/Comment';
import Location from '../src/domain/locations/Location';
import Episode from '../src/domain/episodes/Episode';
import Character from '../src/domain/characters/Character';

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
})
