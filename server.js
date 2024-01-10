const express = require("express");
const eHandleBars = require("express-handlebars");
const session = require("express-session");
const path = require("path");
const routes = require("./controller");
const sequelize = require("./config/connection");
const sequelizeStore = require("connect-session-sequelize")(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const hbs = eHandleBars.create({});

const sess = {
    secret:"SHhh its a secret",
    cookie:{},
    resave:false,
    saveUninitialized:true,
    store: new sequelizeStore({
        db:sequelize,
    })
}

app.use(session(sess));
app.engine("handlebars",hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,"public")));
app.use(routes);

sequelize.sync({force:false}).then(() => {
    app.listen(PORT, () => console.log("now listening") )
});