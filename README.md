_Next.js as the frontend application with a PHP Laravel server backend hosted on a Linux environment_
## Installation 
---
- #### Install PHP and Composer
```bash
sudo apt update && sudo apt upgrade
sudo apt install php php-cli php-xml php-curl composer
```

- #### Install MySQL
```bash
sudo apt install mysql-server php-mysql
``` 

- #### Install  PostgreSQL
```bash
sudo apt install postgresql postgresql-contrib php-pgsql
```
### Back-end
---
- #### Clone the repository
```bash
git clone https://github.com/dot-ASH/next-laravel.git && cd next-laravel
```
- ##### Configure Environment 
```bash
cp .env.example .env
```
_edit the database config like this before setting up database_
```plaintext
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```
_for postgreSQL_
```plaintext
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```
_* needed only for postgreSQL database migration:-_
```bash
php artisan migrate
```

- #### Install composer packages
```bash
composer install && composer require laravel/breeze --dev && php artisan breeze:install api && php artisan key:generate
```
- run the server
```bash
php artisan serve
```
### Front-end
---
_on a new terminal keeping PHP server on_
- ##### Configure Environment 
```bash
cd front-end && cp .env.example .env.local
```
- #### Install dependencies and run 
```bash
yarn && yarn dev
```

_Check if the API is working_ @ <http://localhost:3000/backendVersion> 