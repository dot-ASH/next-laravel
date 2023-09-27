_Next.js as the front-end app on PHP Laravel server on Linux._
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
cp .env.example .env && nano .env
```

```plaintext
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```
* ##### Configure Environment (postgreSQL)
```plaintext
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5432
DB_DATABASE=your_database_name
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

`only for postgre database migration:-`

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
- ##### Configure Environment 
```bash
cd front-end && cp .env.example .env.local
```
- #### Install dependencies and run 
```bash
npm install && npm run dev
```

_Check if the API is working @ <http://localhost:3000/backendVersion> _