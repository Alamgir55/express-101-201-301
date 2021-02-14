const path = require('path');

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
    if(req.query.msg === 'fail'){
        res.locals.msg = `Sorry. This username and pasword combinatino does not exist.`
    }else {
        res.locals.msg = ``
    }
    next();
})

app.get('/', (req, res, next) => {
    res.send('Sanity Check')
})

app.get('/login', (req, res, next) => {
   // console.log(req.query);
    res.render('login');
})

app.post('/process_login', (req, res, next) => {
    // req.body is made by urlencoded, which parses the http message for sent data!
    const username = req.body.username;
    const password = req.body.password;

    if(password === "x"){
        res.cookie('username', username);
        res.redirect('/welcome');
    }else {
        res.redirect('/login?msg=fail&test=hello');
    }
})

app.get('/welcome', (req, res) => {
    res.render('Welcome', {
        username: req.cookies.username
    });
})

app.get('/logout', (req, res) => {
    res.clearCookie('username');
    res.redirect('/login');
})

app.listen(3000);