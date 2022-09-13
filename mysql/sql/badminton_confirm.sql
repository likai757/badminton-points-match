create table confirm
(
    id         bigint unsigned auto_increment
        primary key,
    gid        bigint unsigned not null,
    uid        bigint unsigned null,
    status     int             null comment '1确认;0待确认;',
    gmt_create datetime        null,
    constraint confirm_id_uindex
        unique (id)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO badminton.confirm (id, gid, uid, status, gmt_create) VALUES (1, 1, 1, 1, '2022-09-09 14:47:32');
INSERT INTO badminton.confirm (id, gid, uid, status, gmt_create) VALUES (2, 1, 2, 0, '2022-09-09 14:47:50');
INSERT INTO badminton.confirm (id, gid, uid, status, gmt_create) VALUES (3, 1, 3, 0, '2022-09-09 14:47:59');
INSERT INTO badminton.confirm (id, gid, uid, status, gmt_create) VALUES (4, 1, 4, 1, '2022-09-09 14:48:11');
