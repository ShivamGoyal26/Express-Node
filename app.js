var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function (request, response) {
    response.render('index')
});

app.post('/contact', urlencodedParser, function (request, response) {
    console.log(request.body.email)
    response.render('contactsuccess', { data: request.body })
});

app.get('/contact', function (request, response) {
    console.log(request.query)
    response.render('contact', { qs: request.query })
});

app.get('/profile/:name', function (request, response) {
    var data = {
        age: 29,
        job: 'ninja',
        hobbies: ['eating', 'fighting', 'fishing']
    };
    response.render('profile', {
        person: request.params.name,
        data: data
    });
});

app.listen(3000);