-- Deploy fresh database tables

\i '/docker-entrypoint-initdb.d/tables/locations.sql'
\i '/docker-entrypoint-initdb.d/tables/characters.sql'
\i '/docker-entrypoint-initdb.d/tables/episodes.sql'
\i '/docker-entrypoint-initdb.d/tables/comments.sql'
\i '/docker-entrypoint-initdb.d/tables/episode_character.sql'
