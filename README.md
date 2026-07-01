# Express Assignment

## Features
- Express server with multiple routes
- Custom middleware for logging requests
- Third-party middleware (morgan)
- Inbuilt middleware (express.json())

## Routes

### GET Routes
- `/` - Welcome message
- `/student/:id` - Get student by ID (params)
- `/user/:name/:age` - Get user by name and age (params)
- `/search?course=...&city=...` - Search with query params

### POST Routes
- `/register` - Register user (request body)
- `/login` - Login user (request body)

## Middleware

### Inbuilt Middleware
- `express.json()` - Parses incoming JSON requests

### Third-party Middleware
- `morgan('dev')` - HTTP request logger

### Custom Middleware
- `logger` - Logs request URL, Method, Time, and IP address

## Running the Server

```bash
npm install
npm run dev
```

The server will start on http://localhost:3000

