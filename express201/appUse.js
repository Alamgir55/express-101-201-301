const express = require('express');
const app = express();


function validateUser(req, res, next){
    res.locals.validate = true;
    console.log("VALIDATED RAN");
    next();
}

app.use('/admin', validateUser);

app.get('/', (req, res, next) => {
    res.send("<h1>Main Page</h1>");
    //console.log(res.locals.validate);
});

app.get('/admin', (req, res, next) => {
    res.send("<h1>Main Page</h1>");
    console.log(res.locals.validate);
});

app.listen(3000);
