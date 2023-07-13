const mongoose = require('mongoose')
const employeeSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    department: String,
    salary: Number
})

const EmployeeModel = mongoose.model('Employee', employeeSchema)

module.exports = {EmployeeModel}