CREATE USER 'udemy_user'@'%' IDENTIFIED BY 'udemy_pass';
GRANT ALL PRIVILEGES ON udemy_db.* TO 'udemy_user'@'%' WITH GRANT OPTION;
FLUSH PRIVILEGES;
