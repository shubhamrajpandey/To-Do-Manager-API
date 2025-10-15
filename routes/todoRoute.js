const express = require('express');
const { getAll, getById, postData, updateData, deleteData } = require('../controllers/todoController');

const router = express.Router();

router.get('/',getAll);
router.get('/:id',getById);
router.post('/',postData);
router.put('/:id',updateData);
router.delete('/:id',deleteData);

module.exports = router;