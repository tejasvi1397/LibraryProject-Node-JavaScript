const express = require('express');
const router = express.Router();
const library_controller = require('../controllers/library.controller');

router.post('/create', library_controller.library_create);
// router.post('/', library_controller.library_create);

router.put('/:id/update', library_controller.library_update);

router.delete('/:id/delete', library_controller.library_delete);

router.get('/find', library_controller.library_findall);

router.get('/:id/find', library_controller.library_findbyID);

module.exports = router;