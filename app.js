require('dotenv').config();
const express = require('express');

const router = require('./app/router');

const app = express();
app.use(router);
app.use(express.static('./public'));

app.use(express.urlencoded({extended: true}));


app.listen(process.env.PORT || 3000, () => {
   console.log('Server running on :', process.env.PORT);
});