create table team_users
(
    id         int auto_increment
        primary key,
    team_id    int                  null,
    user_id    int                  null,
    isCaptain  tinyint(1) default 0 null,
    gmt_create datetime             null,
    constraint team_users_id_uindex
        unique (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO badminton.team_users (id, team_id, user_id, isCaptain, gmt_create) VALUES (1, 1, 1, 1, '2022-09-09 16:38:03');
INSERT INTO badminton.team_users (id, team_id, user_id, isCaptain, gmt_create) VALUES (2, 1, 2, 0, '2022-09-09 16:38:17');
INSERT INTO badminton.team_users (id, team_id, user_id, isCaptain, gmt_create) VALUES (3, 2, 3, 1, '2022-09-09 16:38:30');
INSERT INTO badminton.team_users (id, team_id, user_id, isCaptain, gmt_create) VALUES (4, 2, 4, 0, '2022-09-09 16:38:38');
INSERT INTO badminton.team_users (id, team_id, user_id, isCaptain, gmt_create) VALUES (5, 3, 1, 1, '2022-09-09 16:39:03');
INSERT INTO badminton.team_users (id, team_id, user_id, isCaptain, gmt_create) VALUES (6, 4, 2, 1, '2022-09-09 16:50:23');
INSERT INTO badminton.team_users (id, team_id, user_id, isCaptain, gmt_create) VALUES (7, 5, 3, 1, '2022-09-09 16:50:32');
