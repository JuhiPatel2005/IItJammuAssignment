const express = require('express');
const morgan = require('morgan');
const logger = require('./middleware/logger');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(morgan('dev'));
app.use((req, res, next) => {
    console.log(`[debug] ${req.method} ${req.originalUrl}`);
    next();
});
console.log('[app] mounting custom logger middleware');
app.use(logger);

app.get("/", (req,res) => {
    res.send("Welcome to express assignment");
});

app.get("/student/:id", (req,res) => {
    const id = req.params.id;
    res.json({
        message:"Student Details",
        studentId: id
    });
});

app.get('/user/:name/:age', (req, res) => {
    const { name, age } = req.params;
    res.json({
        Name: name,
        Age: age
    });
});

app.get("/search", (req,res) => {
    const {course, city} = req.query;
    res.json({
        Course: course,
        City: city
    });
});

app.post("/register", (req,res) => {
    const {name, email, age } = req.body;
    res.json({
        message: "Registration Successful",
        Student: {
            name,
            email,
            age
        }
    });
});

app.post('/login', (req,res) => {
    const {email, password} = req.body;
    res.json({
        message: 'login Successful',
        email,
        password
    });
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Keep this terminal open to see request logs.');
});

// Error handling
server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error(`Error: Port ${PORT} is already in use`);
    } else {
        console.error('Server error:', e);
    }
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    console.error('Uncaught exception:', err);
    process.exit(1);
});

process.on('SIGINT', () => {
    console.log('Shutting down server...');
    server.close(() => process.exit(0));
});
