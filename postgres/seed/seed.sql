begin transaction;

-- Insert locations
insert into location (name, latitude, longitude, created) values ('Lagos', 8.9, 4, '2019-01-23');
insert into location (name, latitude, longitude, created) values ('Abuja', 11.9, 8, '2019-01-03');
insert into location (name, latitude, longitude, created) values ('Port Harcourt', 5.1, 8.2, '2019-02-25');
insert into location (name, latitude, longitude, created) values ('Uyo', 5.1, 10.1, '2019-04-15');

-- Insert characters
insert into character (firstName, lastName, status, stateOfOrigin, gender, created, locationId) values ('Isaac', 'Nyah', 'UNKNOWN', 'Akwa Ibom', 'MALE', '2019-01-23', 4);
insert into character (firstName, lastName, status, stateOfOrigin, gender, created, locationId) values ('Boris', 'Johnson', 'ACTIVE', 'Ondo', 'MALE', '2019-01-03', 2);
insert into character (firstName, lastName, status, stateOfOrigin, gender, created, locationId) values ('Theresa', 'May', 'UNKNOWN', 'Plateau', 'FEMALE', '2019-02-25', 3);
insert into character (firstName, lastName, status, stateOfOrigin, gender, created, locationId) values ('George', 'Floyd', 'DEAD', 'Borno', 'MALE', '2019-04-15', 1);

-- Insert episodes
insert into episode (name, releaseDate, episodeCode, created) values ('Storms End', '2020-03-01', 'S01E01', '2020-01-15');
insert into episode (name, releaseDate, episodeCode, created) values ('Young Wolf', '2020-03-08', 'S01E02', '2020-01-22');
insert into episode (name, releaseDate, episodeCode, created) values ('Red Keep', '2020-03-15', 'S01E03', '2020-01-29');
insert into episode (name, releaseDate, episodeCode, created) values ('High Garden', '2020-03-22', 'S01E04', '2020-02-05');

-- Add episodes to characters and characters to episodes
insert into episode_character (characterId, episodeId) values (1, 1);
insert into episode_character (characterId, episodeId) values (1, 2);
insert into episode_character (characterId, episodeId) values (1, 3);
insert into episode_character (characterId, episodeId) values (1, 4);
insert into episode_character (characterId, episodeId) values (2, 1);
insert into episode_character (characterId, episodeId) values (2, 2);
insert into episode_character (characterId, episodeId) values (2, 3);
insert into episode_character (characterId, episodeId) values (2, 4);
insert into episode_character (characterId, episodeId) values (3, 1);
insert into episode_character (characterId, episodeId) values (3, 3);
insert into episode_character (characterId, episodeId) values (4, 1);
insert into episode_character (characterId, episodeId) values (4, 2);
insert into episode_character (characterId, episodeId) values (4, 4);

-- Insert comments in episodes
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '10.234.23.54', '2020-02-05', 1);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '22.204.28.54', '2020-02-07', 2);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '13.234.33.54', '2020-02-10', 3);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '24.234.3.4', '2020-02-10', 4);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '10.234.23.74', '2020-02-15', 1);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '10.234.23.54', '2020-02-05', 2);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '22.204.28.54', '2020-02-07', 3);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '13.234.33.54', '2020-02-10', 4);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '24.234.3.4', '2020-02-10', 1);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '10.234.23.74', '2020-02-15', 2);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '10.234.23.54', '2020-02-05', 3);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '22.204.28.54', '2020-02-07', 4);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '13.234.33.54', '2020-02-10', 1);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '24.234.3.4', '2020-02-10', 2);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '10.234.23.74', '2020-02-15', 3);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '10.234.23.54', '2020-02-05', 4);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '22.204.28.54', '2020-02-07', 1);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '13.234.33.54', '2020-02-10', 2);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '24.234.3.4', '2020-02-10', 3);
insert into comment (comment, ipAddressLocation, created, episodeId) values ('laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium', '10.234.23.74', '2020-02-15', 4);

commit;
