# Backend API Documentation

## Endpoints

### POST /users/register

#### Description

This endpoint is used to register a new user.

#### Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the user's email address with a minimum length of 5 characters (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:

````json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}# Backend API Documentation

## Endpoints

### POST /users/register

#### Description
This endpoint is used to register a new user.

#### Request Body
The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the user's email address with a minimum length of 5 characters (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
Responses
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
Bad request
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}

````

# Backend API Documentation

## Endpoints

### POST /users/register

#### Description

This endpoint is used to register a new user.

#### Request Body

The request body should be a JSON object containing the following fields:

- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required).
  - `lastname`: A string with a minimum length of 3 characters (optional).
- `email`: A string representing the user's email address with a minimum length of 5 characters (required).
- `password`: A string with a minimum length of 6 characters (required).

Example:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

[Previous documentation remains the same...]

### GET /users/profile

#### Description

This endpoint retrieves the profile information of the authenticated user.

#### Authentication

Requires a valid JWT token in:

- Cookie named "token" OR
- Authorization header: `Bearer <token>`

#### Responses

- **200 OK**

  - **Description**: Successfully retrieved user profile
  - **Example**:
    ```json
    {
      "_id": "60d0fe4f5311236168a109ca",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**
  - **Description**: No token provided or invalid token
  - **Example**:
    ```json
    {
      "message": "Unauthorized - No token provided"
    }
    ```

### GET /users/logout

#### Description

This endpoint logs out the current user by invalidating their token.

#### Authentication

Requires a valid JWT token in:

- Cookie named "token" OR
- Authorization header: `Bearer <token>`

#### Responses

- **200 OK**

  - **Description**: Successfully logged out
  - **Example**:
    ```json
    {
      "message": "Logged out"
    }
    ```

- **401 Unauthorized**
  - **Description**: No token provided or invalid token
  - **Example**:
    ```json
    {
      "message": "Unauthorized - No token provided"
    }
    ```

[Previous environment variables and setup instructions remain the same...][Previous documentation remains the same...]

### GET /users/profile

#### Description

This endpoint retrieves the profile information of the authenticated user.

#### Authentication

Requires a valid JWT token in:

- Cookie named "token" OR
- Authorization header: `Bearer <token>`

#### Responses

- **200 OK**

  - **Description**: Successfully retrieved user profile
  - **Example**:
    ```json
    {
      "_id": "60d0fe4f5311236168a109ca",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
    ```

- **401 Unauthorized**
  - **Description**: No token provided or invalid token
  - **Example**:
    ```json
    {
      "message": "Unauthorized - No token provided"
    }
    ```

### GET /users/logout

#### Description

This endpoint logs out the current user by invalidating their token.

#### Authentication

Requires a valid JWT token in:

- Cookie named "token" OR
- Authorization header: `Bearer <token>`

#### Responses

- **200 OK**

  - **Description**: Successfully logged out
  - **Example**:
    ```json
    {
      "message": "Logged out"
    }
    ```

- **401 Unauthorized**
  - **Description**: No token provided or invalid token
  - **Example**:
    ```json
    {
      "message": "Unauthorized - No token provided"
    }
    ```

[Previous environment variables and setup instructions remain the same...]
