# Pagination

Tables -
CREATE TABLE `tb_user` ( `user_id` INT NOT NULL AUTO_INCREMENT , `admin_id` INT NOT NULL , `user_name` VARCHAR(256) NOT NULL , `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`user_id`)) ENGINE = InnoDB;

CREATE TABLE `tb_admin` ( `admin_id` INT NOT NULL AUTO_INCREMENT , `is_active` TINYINT NOT NULL DEFAULT '1' , `admin_name` VARCHAR(256) NOT NULL , `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , PRIMARY KEY (`admin_id`)) ENGINE = InnoDB;

Create These APIs with NodeJs 

 1: Create an API which provides user’s list with pagination 

 2: Create an API which provides all users who are having user_id either 1 or 5 or 7

 3: Create an API which provides all user whose admin has at least 3 users
