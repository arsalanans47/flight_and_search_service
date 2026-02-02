# Welcome to Flight service

## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloded project
- create a `.env` file in the root directory and add the following enviorment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": <YOUR_DB_LOGIN_NAME>,
    "password": <YOUR_DB_PASSWORD>,
    "database": "Flight_search_db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```