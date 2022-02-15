const express = require('express');
const path = require('path');
const pool = require('./database');

const app = express();

const PORT = 3000;
const apiRouter = require('./api');

/**
 * handle parsing request body
 */
 app.use(express.json());
 app.use(express.urlencoded({ extended: true }));
 
/**
 * handle requests for static files
 */
 app.use(express.static('./client'));

 const HTML_FILE = path.join(__dirname, '../client/index.html');

// route handler to respond with main app
app.get('/', (req, res) => {
  res
    .status(200)
    .contentType('text/html')
    .sendFile(HTML_FILE, (err) => {
      if (err) {
        res.status(500).send(err);
      }
    });
});


 /**
 * define route handlers
 */
app.use('/api', apiRouter);

// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//global error handler 
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });
  
  /**
   * start server
   */
  app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}...`);
  });
  
  module.exports = app;