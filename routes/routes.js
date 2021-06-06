const express = require('express');
const { getAllArgos, addArgo } = require('../controllers/argoController');
const { catchErrors } =require('../helpers');
const path = require('path');


const router = express.Router();

router.get('/api/list', catchErrors(getAllArgos));
router.post('/api/argo', catchErrors(addArgo));

router.get('/*', (_,res) => {
    res.sendFile(path.join(__dirname, '../client/build/public/index.html'));
})

module.exports = router;