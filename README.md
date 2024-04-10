# Secure Arithmetic Operation API with Authentication

A simple Node.js application that acts as a secure arithmetic operation API protected by JWT (JSON Web Tokens) authentication. This program allows clients to perform basic arithmetic operations (addition, subtraction, multiplication, division) on two numbers after authenticating themselves.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- JWT-based authentication
- Generate a JWT token upon successful authentication
- Protect API endpoints using the JWT token
- API endpoints for arithmetic operations:
  - Addition: `/add`
  - Subtraction: `/subtract`
  - Multiplication: `/multiply`
  - Division: `/divide`

## Prerequisites

- Node.js installed on your machine. If not, download and install Node.js from [here](https://nodejs.org/).
- MongoDB installed and running locally or a MongoDB Atlas account for cloud database.

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/sabari570/Backend-Task-1-Arithmetic-operation-API-with-Auth.git
    ```

2. Navigate to the project directory:

    ```bash
    cd Backend-Task-1-Arithmetic-operation-API-with-Auth
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Start the server:

    ```bash
    npm run dev
    ```

2. The server will start running on `http://localhost:8000`.

## API Endpoints

- **POST** `/api/auth/authenticate`
  - Authenticate user and generate JWT token
- **POST** `/api/auth/regenerate-token`
  - Regenerate a new JWT token using refresh token
- **GET** `/api/add`
  - Perform addition
- **GET** `/api/subtract`
  - Perform subtraction
- **GET** `/api/multiply`
  - Perform multiplication
- **GET** `/api/divide`
  - Perform division

### Example Request for JWT Token:

```json
POST /api/auth/authenticate
{
  "username": "admin",
  "password": "123"
}

POST /auth/regenerate-token
{
  "refreshToken": "<paste your refresh token here>"
}
```

## Technologies Used
- Node.js
- Express.js
- jsonwebtoken (jwt)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License
