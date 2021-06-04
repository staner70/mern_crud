const express = require('express');
const {getAllArgos, addArgo} = require('./controllers/argoController');

const router = express.Router();



router.get('/', getAllArgos);
router.post('/', addArgo);

module.exports = router;