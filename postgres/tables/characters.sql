begin transaction;

create table "character" (
	id serial primary key,
	firstName varchar(100) not null,
	lastName varchar(100) not null,
	status varchar(100) not null,
	stateOfOrigin varchar(100) not null,
	gender varchar(100) not null,
	created timestamp not null,
  foreign key(locationId)
    references location(id)
);

commit;
