const express = require('express');
const session = require('express-session');
//const exphbs = require('express-handlebars');
const allRoutes = require('./controllers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 5000;
// Requiring our models for syncing
const {User,Gopro,Review} = require('./models');

const sess = {
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge:1000*60*60*3
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sess));
//// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
//app.use(express.static('public'));


//onst hbs = exphbs.create({});
//app.engine('handlebars', hbs.engine);
//app.set('view engine', 'handlebars');
 
app.use('/',allRoutes);

//force true drops database info
//TRUE if you want data to drop
//FALSE to un-sync database
//should be opposite of seeds/seed.js?
sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
    console.log('You have tuned in to PORT ' + PORT);
    });
});