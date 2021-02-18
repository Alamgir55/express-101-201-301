const path = require('path');
const express = require('express');
const app = express();
const helmat = require('helmet');

app.use(helmat());
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render("index");
})

app.listen(3000);