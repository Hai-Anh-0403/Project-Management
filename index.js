const express = require("express");
const methodOverride = require('method-override');
const flash = require('express-flash');
require('dotenv').config();
const database = require("./config/database");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');



database.connect();
const app = express();
const port = process.env.PORT;
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: false }));
//flash
app.use(cookieParser('batky'));
app.use(session({
    resave: false,
    secret: 'batky',
    saveUninitialized: false
    , cookie: { maxAge: 60000 }
}));
app.use(flash());
//end flash
const systemConfig = require("./config/systems")

const routeAdmin = require("././routes/admin/index.route");
const route = require("././routes/client/index.route");


app.set("views", "./views");
app.set("view engine", "pug");


//App locals variables
app.locals.prefixAdmin = systemConfig.prifixAdmin;
app.use(express.static("public"));


//router
routeAdmin(app);
route(app);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
