begin transaction;

create table "location" (
	id serial primary key,
	name varchar(100) not null,
	latitude float not null,
	longitude float not null,
	created timestamp not null
);

commit;
