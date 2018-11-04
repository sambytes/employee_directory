const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema(
  {
    name: {
        first: String,
        last: String,
    },
    location: {
        city: String,
        state: String,
    },
    phone: String,
    email: String,
    picture: String
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Employee", EmployeeSchema);