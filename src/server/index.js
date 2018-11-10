const http = require('http');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const compression = require('compression');

const app = express();

const applicationName = 'boilerplate';

app.set('port', (process.env.PORT || 3000));
app.set('root', __dirname);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../../dist')));

// function storeCredentials({ credentials, token }) {
//   return new Promise((resolve) => {
//     app.credentials = credentials;
//     app.token = token;
//     resolve();
//   });
// }

// function getData() {
//   const { credentials, token } = app;

//   // add file id
//   const fileId = '';
//   return new Promise((resolve) => {
//     authorise({ credentials, token }, (authentication) => {
//       getData(authentication, fileId).then((data) => {
//         resolve(data);
//       });
//     });
//   });
// }

// function storeData(data) {
//   return new Promise((resolve) => {
//     app.dataStore = data;
//     resolve(data);
//   });
// }

// function init() {
//   getCredentials(applicationName)
//     .then(storeCredentials)
//     .then(getData)
//     .then(storeData);
// }

// init();

app.get('/api', (req, res) => {
  res.json({ transmit: 'success' });
});

app.get('/reload', (req, res) => {
  // init();
  res.send('Data reloaded.');
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist', 'index.html'));
});

const server = http.createServer(app);

server.listen(app.get('port'), () => {
  console.log('Listening on port', app.get('port'));
});
