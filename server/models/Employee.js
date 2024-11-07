const mongoose = require('mongoose'); // Import Mongoose library

// Define the Employee schema
const EmployeeSchema = new mongoose.Schema({
    name: String, // Field for employee's name
    email: String, // Field for employee's email
    password: String // Field for employee's password
});

// Create a model based on the schema
const EmployModel = mongoose.model("employees", EmployeeSchema);

// Export the model for use in other modules
module.exports = EmployModel;