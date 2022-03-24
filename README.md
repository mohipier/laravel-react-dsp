## Project Features
- View Campaign List
- Create and Edit campaign.
- Reusable Component: Preview button to check campaign uploads
- Dockerized with Laravel Sail

## Installation

- `composer install`
- `npm install`
- `rename .env.example to .env file`
- `./vendor/bin/sail up`
- `./vendor/bin/sail artisan key:generate`
- `./vendor/bin/sail artisan config:cache`
- `./vendor/bin/sail artisan migrate --seed`
- `run on: http://localhost`