# Todo Project Phase 2 Specification

## User Journeys

### 1. User Registration and Authentication
- As a new user, I want to register with my email and password to create an account
- As a registered user, I want to log in to access my todo lists
- As a logged-in user, I want to securely log out of the application

### 2. Todo Management
- As a logged-in user, I want to view all my todos on a dashboard
- As a user, I want to create a new todo with a title, description, and due date
- As a user, I want to view details of a specific todo
- As a user, I want to update an existing todo (title, description, due date, completion status)
- As a user, I want to delete a todo I no longer need
- As a user, I want to mark a todo as completed or uncompleted
- As a user, I want to filter and sort my todos by various criteria (due date, priority, status)

### 3. User Profile Management
- As a user, I want to view and update my profile information
- As a user, I want to manage my account settings

## REST API Requirements

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user and return JWT
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user profile

### Todo Endpoints
- `GET /api/todos` - Retrieve all todos for the authenticated user
- `GET /api/todos/{id}` - Retrieve a specific todo by ID
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/{id}` - Update an existing todo
- `PATCH /api/todos/{id}` - Partially update a todo (e.g., toggle completion status)
- `DELETE /api/todos/{id}` - Delete a specific todo

### User Profile Endpoints
- `GET /api/users/profile` - Retrieve current user profile
- `PUT /api/users/profile` - Update user profile information

## API Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... },
  "message": "Optional message"
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Descriptive error message"
  }
}
```

## Data Models

### User
- id: UUID
- email: String (unique)
- password_hash: String
- first_name: String (optional)
- last_name: String (optional)
- created_at: DateTime
- updated_at: DateTime

### Todo
- id: UUID
- user_id: UUID (foreign key to User)
- title: String
- description: Text (optional)
- due_date: DateTime (optional)
- completed: Boolean (default: false)
- priority: Enum (low, medium, high)
- created_at: DateTime
- updated_at: DateTime

## Authentication & Authorization
- All API endpoints (except auth endpoints) require a valid JWT in the Authorization header
- Users can only access their own todos
- JWT should be included as: `Authorization: Bearer <token>`

## Error Handling
- 400 Bad Request: Invalid request format or validation errors
- 401 Unauthorized: Missing or invalid authentication token
- 403 Forbidden: Valid token but insufficient permissions
- 404 Not Found: Requested resource does not exist
- 422 Unprocessable Entity: Validation errors for input data
- 500 Internal Server Error: Server-side errors