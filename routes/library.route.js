const express = require('express');
const router = express.Router();
const library_controller = require('../controllers/library.controller');

router.post('/create', library_controller.library_create);
// router.post('/', library_controller.library_create);

router.put('/:id/update', library_controller.library_update);

module.exports = router;