create table game_team
(
    id      bigint unsigned auto_increment
        primary key,
    game_id int null,
    team_id int null,
    constraint game_team_id_uindex
        unique (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO badminton.game_team (id, game_id, team_id) VALUES (1, 1, 1);
INSERT INTO badminton.game_team (id, game_id, team_id) VALUES (2, 1, 2);
INSERT INTO badminton.game_team (id, game_id, team_id) VALUES (3, 2, 3);
INSERT INTO badminton.game_team (id, game_id, team_id) VALUES (4, 2, 5);
