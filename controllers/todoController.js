const ToDo = require("../models/todoModel");

// Get all
exports.getAll = async (req, res) => {
  try {
    const todos = await ToDo.find();
    res.status(200).json({
      Success: true,
      Message: "Successfully Retrieved.",
      data: todos,
      total: todos.length,
    });
  } catch (error) {
    res.status(500).json({
      Success: false,
      Message: error.message,
    });
  }
};

// Get by ID
exports.getById = async (req, res) => {
  try {
    const todo = await ToDo.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({
        Success: false,
        Message: "ToDo not found",
      });
    }
    res.status(200).json({
      Success: true,
      Message: "Successfully Retrieved by ID.",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      Success: false,
      Message: error.message,
    });
  }
};

// Create
exports.postData = async (req, res) => {
  try {
    const todo = await ToDo.create(req.body);
    res.status(201).json({
      Success: true,
      Message: "Successfully Created.",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      Success: false,
      Message: error.message,
    });
  }
};

// Update
exports.updateData = async (req, res) => {
  try {
    const todo = await ToDo.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!todo) {
      return res.status(404).json({
        Success: false,
        Message: "ToDo not found",
      });
    }
    res.status(200).json({
      Success: true,
      Message: "Successfully Updated.",
      data: todo,
    });
  } catch (error) {
    res.status(400).json({
      Success: false,
      Message: error.message,
    });
  }
};

// Delete
exports.deleteData = async (req, res) => {
  try {
    const todo = await ToDo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({
        Success: false,
        Message: "ToDo not found",
      });
    }
    res.status(200).json({
      Success: true,
      Message: "Successfully Deleted.",
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      Success: false,
      Message: error.message,
    });
  }
};
