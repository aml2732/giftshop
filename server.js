const process = require('process');
const {createServer} = require('http');
const express = require('express');
const path = require('path');

const apiv1 = require('./routes/api-v1.js');
//const fs = require('fs');

//Base path / port for react app independant of local vs prod build.
const basePath =  path.resolve(__dirname, 'build'); //fs.existsSync(path.resolve(__dirname, 'build')) ? path.resolve(__dirname, 'build') : path.resolve(__dirname, 'public')
const getPort = (port) => {return parseInt(port);}
const PORT = getPort(process.env.PORT || 5000)


const app = express();
app.use(express.static(basePath));

app.use('/v1', apiv1);

app.get('*', (req, res) => {
  res.sendFile(path.resolve(basePath, 'index.html'));
})


const server = createServer(app);
server.listen(PORT, err =>{
  if(err) {throw err};
  console.log('Server started!')
})
