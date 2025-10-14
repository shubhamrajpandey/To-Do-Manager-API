const express = require('express');
const { getAll, getById, postData, updateData, deleteData } = require('../controllers/todoController');
const { routeMiddleware } = require('../middlewares/todoMiddleware');
const router = express.Router();

router.get('/',routeMiddleware,getAll);
router.get('/:id',getById);
router.post('/',postData);
router.put('/:id',updateData);
router.delete('/:id',deleteData);

module.exports = router;