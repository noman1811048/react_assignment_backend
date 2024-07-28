# Hotel Details REST API

This project provides REST APIs for serving hotel details from a PostgreSQL database using Node.js and Express.js. The application includes robust error handling and uses a configuration JSON file for managing credentials like database access.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)


## Features

- Serve hotel details from a PostgreSQL database
- Configuration via a JSON file for database credentials
- Robust error handling to prevent app crashes
- Proper HTTP status codes and response/error messages

## Prerequisites

- Node.js (v14.x or later)
- PostgreSQL (v12.x or later)

## Installation

1. Clone the repository:
    ```bash
    https://github.com/noman1811048/react_assignment_backend
    cd react_assignment_backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up the PostgreSQL database:
  

4. Insert sample data into the `hotels` table as needed.

## Configuration

Create a `config.json` file in the root directory with the following structure:

```json
{
  "db": {
    "host": "localhost",
    "port": 5432,
    "database": "hoteldb",
    "user": "yourusername",
    "password": "yourpassword"
  }
}
```
## Usage 
##### npm start
## API Endpoints
##### Get all hotels
#### URL: /api/hotels and /api/rooms
#### Method: GET
