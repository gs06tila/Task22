const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

// Set the default views directory to view folder
app.set('views', path.join(__dirname, 'views'));

//Set the folder for css & javascript
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'js')));
app.use(express.static(path.join(__dirname, 'img')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// Set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/', routes);

app.listen(process.env.PORT || 8080);
