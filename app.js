require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes/routes.js');

const app = express();
app.use(express.json());

app.use(express.static('./public'));

app.use(express.urlencoded({extended: true}));
mongoose.connect(process.env.MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.use(routes);


app.listen(process.env.PORT || 3000, () => {
   console.log('Server running on :', process.env.PORT);
});