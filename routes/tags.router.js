const { Router } = require('express');
const { getAll } = require('../controllers/tags.controller');

const router = Router();

router.get('/', getAll);

module.exports = router;
