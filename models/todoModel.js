const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true, 
        trim: true
    },
    description: {
        type: String,
        trim: true,
        default: ""
    },
    completed: {
        type: Boolean,
        default: false 
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "medium"
    },
    dueDate: {
        type: Date,
        default: null
    }
}, { timestamps: true }); 

const ToDo = mongoose.model("ToDo", todoSchema);

module.exports = ToDo;
