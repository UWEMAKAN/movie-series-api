begin transaction;

create table episode_character (
	id serial primary key,
  foreign key(episodeId)
    references episode(id),
  foreign key(characterId)
    references character(id)
);

commit;
