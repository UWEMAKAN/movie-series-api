begin transaction;

create table comment (
	id serial primary key,
	comment varchar(1000) not null,
	ipAddressLocation varchar(100) not null,
	created date not null,
  foreign key(episodeId)
    references episode(id)
);

commit;
