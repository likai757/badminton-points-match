create table game
(
    id         bigint unsigned auto_increment
        primary key,
    victory    bigint unsigned null,
    score      int             null,
    status     int             null comment '1生效：0待确认',
    submit_uid int             null,
    gmt_create datetime        not null,
    constraint game_id_uindex
        unique (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO badminton.game (id, victory, score, status, submit_uid, gmt_create) VALUES (1, 2, 1, 0, 1, '2022-09-09 00:00:00');
INSERT INTO badminton.game (id, victory, score, status, submit_uid, gmt_create) VALUES (2, 5, 1, 1, 1, '2022-09-09 14:46:19');
