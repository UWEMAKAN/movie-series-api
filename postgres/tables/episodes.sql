begin transaction;

create table episode (
	id serial primary key,
	name varchar(100) not null,
	releaseDate date not null,
	episodeCode varchar(100) not null,
	created date not null,
  foreign key(locationId)
    references location(id)
);

commit;
