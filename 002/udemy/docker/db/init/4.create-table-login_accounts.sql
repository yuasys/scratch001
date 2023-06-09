USE udemy_db;

CREATE TABLE `login_accounts` (
  `id`           INT NOT NULL AUTO_INCREMENT,
  `login_id`     VARCHAR(100) NOT NULL UNIQUE,
  `password`     VARCHAR(255) NOT NULL,
  `name`         VARCHAR(255) NOT NULL,
  `created`      DATETIME,
  `updated`      DATETIME,
  CONSTRAINT PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_bin;
