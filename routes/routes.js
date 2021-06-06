const express = require('express');
const { getAllArgos, addArgo } = require('../controllers/argoController');
const { catchErrors } =require('../helpers');

const router = express.Router();

router.get('/api/list', catchErrors(getAllArgos));
router.post('/api/argo', catchErrors(addArgo));

module.exports = router;