const express = require('express');
const path = require('path');
const port = 5000;
const app = express(); //server



// in order to post data to the server we need to use body-parser (above router imports)
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }))


// tells the server that the views are in the views folder and that we use ejs as a view engine
const ejs = require('ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');



// import routes
const indexRouter = require('./routes/index'); //homepage
const usersRouter = require('./routes/users'); //users

// telling the app to use the routes
// express.static to be able to use this directory for fileupload or for linking the stylesheet
// path.join() connects the directory with the folder of the second parameter

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use(express.static(path.join(__dirname,"views")));



//to make the app listen to the requests (always at the bottom)
app.listen(port, () => {
    console.log(`Website running at http://localhost:${port}`)
})

