const mongoose = require("mongoose");
const AdminSchema = new mongoose.Schema({
    username: {
        type: String, 
        required: true,
        match: /^[A-Za-z\s]+$/ 
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        match: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/ 
    }
});
module.exports = mongoose.model("admin", AdminSchema);