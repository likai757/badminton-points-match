create table team
(
    id       int auto_increment
        primary key,
    teamname varchar(500) null,
    gametype int          null comment '1男单|2女单|3男双|4女双|5混双'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO badminton.team (id, teamname, gametype) VALUES (1, '炽羽|颂景', 5);
INSERT INTO badminton.team (id, teamname, gametype) VALUES (2, '肘肘|辛未', 3);
INSERT INTO badminton.team (id, teamname, gametype) VALUES (3, '炽羽', 1);
INSERT INTO badminton.team (id, teamname, gametype) VALUES (4, '颂景', 2);
INSERT INTO badminton.team (id, teamname, gametype) VALUES (5, '肘肘', 1);
