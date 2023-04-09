# HoardGames Backend

This is the backend for HoardGames, a web application that allows users to track their board game collection, rate and review their games, and search for new games to add to their collection.

## Features

- Board Game Search: The backend interacts with the BoardGameAtlas API to search for board games using keywords and other parameters. The search results are returned to the frontend as JSON.
- Collection Management: The backend receives requests from the frontend to add, update, delete, and retrieve board games in the user's collection. These operations are performed on a PostgreSQL database using the Knex.js library.

## Technical Details

This app is built using Node.js and the Express framework for the backend. PostgreSQL is used as the database management system, and Knex.js is used as the query builder.

## Installation

To run this app on your local machine, follow these steps:

1. Clone the repository to your machine.
2. In the root directory of the project, run `npm install` to install the dependencies.
3. Create a PostgreSQL database for the app to use.
4. Create a `.env` file in the root directory of the project and add the following lines, replacing the values in square brackets with your actual values:

    ```
    DB_HOST=localhost
    DB_NAME=your_database_name
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    ```
    

5. Run `npm run knex migrate:latest` to set up the database schema.
6. Run `npm start` to start the server.
7. The backend will be running on `http://localhost:5000`.

## Frontend

The frontend for this app can be found [here](https://github.com/amekatze/hoardgames-frontend).

