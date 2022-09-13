create table user
(
    id          bigint unsigned auto_increment
        primary key,
    workid      varchar(20)              null,
    nickname    varchar(200)             null,
    gender      int        default 1     null comment '0: 女 1: 男 2: 保密',
    avartar     varchar(1000)            null,
    username    varchar(20)              not null,
    password    varchar(50)              not null,
    token       varchar(100)             null,
    tokenPeriod datetime                 null,
    level       varchar(3) default '1.0' null,
    constraint user_username_uindex
        unique (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

INSERT INTO badminton.user (id, workid, nickname, gender, avartar, username, password, token, tokenPeriod, level) VALUES (1, '167072', '炽羽', 1, null, 'likai757', '123456', null, null, '1.0');
INSERT INTO badminton.user (id, workid, nickname, gender, avartar, username, password, token, tokenPeriod, level) VALUES (2, '231225', '颂景', 0, null, 'songjing123', '123456', null, null, '1.0');
INSERT INTO badminton.user (id, workid, nickname, gender, avartar, username, password, token, tokenPeriod, level) VALUES (3, '232415', '肘肘', 1, null, 'zhouzhou123', '123456', null, null, '1.0');
INSERT INTO badminton.user (id, workid, nickname, gender, avartar, username, password, token, tokenPeriod, level) VALUES (4, '308025', '辛未', 1, null, 'xinwei123', '123456', null, null, '1.0');
