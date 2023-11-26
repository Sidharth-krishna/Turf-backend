//import json server
const jsonServer = require("json-server");

//create json-srver
const mediaPlayerServer = jsonServer.create();

//create path to json file
const router = jsonServer.router("db.json");

//middleware to convert json to js
const middleware = jsonServer.defaults();

//use middleware and route in server
mediaPlayerServer.use(middleware);
mediaPlayerServer.use(router);

//set a port
const port = 5000 || process.env.PORT;

//listen server
mediaPlayerServer.listen(port, () => {
  console.log("server started!!");
});