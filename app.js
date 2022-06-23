const express = require("express");
const routerApi = require("./routes");
const {
  logError,
  boomErrorHandler,
  ormErrorHandler,
} = require("./middlewares/error.handler");

const app = express();
const PORT = 3002;

app.use(express.json());

app.listen(PORT, (error) => {
  if (error) {
    console.log("error al conectarse");
  } else {
    console.log("bienvenido");
  }
});

routerApi(app);

app.use(logError);
app.use(boomErrorHandler);
app.use(ormErrorHandler);
