FROM mysql:5.7
ADD mysqld.cnf /etc/mysql/mysql.conf.d/mysqld.cnf
COPY sql /opt/sql
COPY init/init.sql /docker-entrypoint-initdb.d
