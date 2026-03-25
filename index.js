const express = require("express");

require('dotenv').config();
const database=require("./config/database")

database.connect();
const app = express();
const port = process.env.PORT;

const systemConfig=require("./config/systems")

const routeAdmin = require("././routes/admin/index.route");
const route = require("././routes/client/index.route");


app.set("views", "./views");
app.set("view engine", "pug");


//App locals variables
app.locals.prefixAdmin=systemConfig.prifixAdmin;
app.use(express.static("public"));


//router
routeAdmin(app);
route(app);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
