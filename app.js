const express = require('express');
const session = require('express-session');
const routes = require('./routes')
const user = require('./routes/user')
const mysql = require('mysql');
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars');
const PORT = process.env.PORT || 8000;
const app = express();

// database connectivity
 const conn = mysql.createConnection({
     host: "localhost",
     user : 'root',
     password: "",
     database: "users"
 });
 conn.connect ();
 global.db = conn;

//  for body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.urlencoded({ extended : false }));

// template engine
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.get('/', routes.index);                //call for main index page
app.get('/register', user.register);       //call for contact form page
app.post('/register', user.register);      //call for contact form post 
app.post('/index', user.login);            //call for login post
app.get('/profile',user.profile);          //to render users profile
app.get('/logout', user.logout);           //call for logout


// setting up the server
app.listen(PORT, () => {
    console.log("App running on port: ", PORT)
});





