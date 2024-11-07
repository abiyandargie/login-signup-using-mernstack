const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/Employee")
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch(err => {
        console.error("Database connection error:", err);
    });

// Login Endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body; // Destructure to get email and password
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    return res.json('success');
                } else {
                    return res.status(401).json('The password is incorrect');
                }
            }
            return res.status(404).json('No record exists!');
        })
        .catch(err => res.status(500).json('Error occurred during login:', err));
});

// Register Endpoint
app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => res.status(201).json(employee))
        .catch(err => res.status(400).json('Error occurred during registration:', err));
});

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});