const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/claim');
const cors = require('cors');
const jwt=require('jsonwebtoken')
const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors(
  {
      origin: ["http://localhost:5173"],
      methods: ["POST", "GET", "PUT","DELETE"],
      credentials: true
  }
));
app.use(bodyParser.json());
app.use(routes);

app.listen(port, () => {
  console.log('App listening on port 3000');
});
