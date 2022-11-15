const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerSchema = new mongoose.Schema({
  Name: {
    type: String,
  },

  Company_Name: {
    type: String,
  },
  Business_Industry: {
    type: String,
  },
  Entry_Type: {
    type: String,
  },
  Business_StartDate: {
    type: String,
  },
  Loan_Ammount: {
    type: String,
  },
  zipcode: {
    type: String,
  },
  Annual_Revenue: {
    type: String,
  },
  Credit_Score: {
    type: String,
  },
  Purpose_of_Loan: {
    type: String,
  },
  Phone_Number: {
    type: String,
  },
  Driving_Licence: {
    type: String,
  },
  Bank_Statement: {
    type: String,
  },
  Voided_Check: {
    type: String,
  },
  Website: {
    type: String,
  },
  Tax_ID: {
    type: String,
  },
  SSN: {
    type: String,
  },

  date: {
    type: Date,
    default: Date.now,
  },
  pdf1: {
    type: String,
  },
  pdf2: {
    type: String,
  },
  pdf3: {
    type: String,
  },
});

const Register = new mongoose.model("Register", registerSchema);
module.exports = Register;
