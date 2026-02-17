# User Authentication API (Node.js + PostgreSQL)

A professional, secure, and scalable User Authentication API built with Node.js, Express, and PostgreSQL.

## Features

- **Robust Validation**: Input data validation using [Zod](https://zod.dev/).
- **Security**: 
  - Password hashing with Bcrypt.
  - JWT-based authentication.
  - Rate Limiting to prevent brute-force attacks.
- **Error Handling**: Centralized error handling middleware for consistent API responses.
- **Docker Ready**: Fully containerized with Docker and Docker Compose.
- **Database**: PostgreSQL with automatic schema initialization.

## Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (Recommended)
- Node.js (v20+) - *If running locally without Docker*

## Quick Start (with Docker)

1. **Clone the repository**:
   ```bash
   git clone <your-repository-url>
   cd user-auth-api
   ```

2. **Setup environment variables**:
   Copy the example environment file and fill in your values:
   ```bash
   cp .env.example .env
   ```

3. **Run the application**:
   ```bash
   docker-compose up --build
   ```
   The API will be available at `http://localhost:3000`.

## API Endpoints

### Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/register` | Register a new user |
| `POST` | `/api/auth/login` | Login and receive a JWT token |
| `GET` | `/api/auth/profile` | Get logged-in user profile (Requires JWT) |

## Testing

You can use **Postman** or **Insomnia** to test the endpoints.
- For protected routes, include the JWT token in the header:
  `Authorization: Bearer <your_token>`

---
Developed as a high-quality authentication boilerplate.
