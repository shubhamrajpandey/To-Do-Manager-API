const mongoose = require('mongoose');


const ToDo = require("./models/todoModel");

const uri =
  "mongodb+srv://shubhamrajpandey875:Pandey5raj@cluster0.4awp2nj.mongodb.net/To-DoDB?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(uri)
  .then(() => console.log("Database is running"))
  .catch((err) => console.log(err));


const demoData = [
  {
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-10-15T00:00:00Z"
  },
  {
    "title": "Finish homework",
    "description": "Math and Science homework",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-10-16T00:00:00Z"
  },
  {
    "title": "Workout",
    "description": "Go to the gym for cardio",
    "completed": false,
    "priority": "low",
    "dueDate": "2025-10-17T00:00:00Z"
  },
  {
    "title": "Call mom",
    "description": "Check how she is doing",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-10-14T00:00:00Z"
  },
  {
    "title": "Clean room",
    "description": "Organize books and clothes",
    "completed": false,
    "priority": "low",
    "dueDate": "2025-10-18T00:00:00Z"
  },
  {
    "title": "Pay bills",
    "description": "Electricity and Internet bills",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-10-19T00:00:00Z"
  },
  {
    "title": "Read book",
    "description": "Read 20 pages of a novel",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-10-20T00:00:00Z"
  },
  {
    "title": "Plan weekend trip",
    "description": "Decide destination and book hotel",
    "completed": false,
    "priority": "medium",
    "dueDate": "2025-10-21T00:00:00Z"
  },
  {
    "title": "Finish project",
    "description": "Complete the To-Do App project",
    "completed": false,
    "priority": "high",
    "dueDate": "2025-10-22T00:00:00Z"
  },
  {
    "title": "Meditation",
    "description": "Meditate for 15 minutes",
    "completed": false,
    "priority": "low",
    "dueDate": "2025-10-14T00:00:00Z"
  }
]

async function seed() {
    const data = await ToDo.insertMany(demoData);
    console.log("Created");
    mongoose.disconnect();
    
}
seed();