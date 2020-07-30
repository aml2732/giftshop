const {createServer} = require('http');
const express = require('express');
const path = require('path');
//const fs = require('fs');

//Base path / port for react app independant of local vs prod build.
const basePath =  path.resolve(__dirname, 'build'); //fs.existsSync(path.resolve(__dirname, 'build')) ? path.resolve(__dirname, 'build') : path.resolve(__dirname, 'public')
const getPort = (port) => {return parseInt(port);}
const PORT = getPort(process.env.PORT || 5000)

console.log('basePath: ');
console.log(basePath)
console.log(path.resolve(basePath, 'index.html'))

const app = express();
app.use(express.static(basePath));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(basePath, 'index.html'));
})

const server = createServer(app);
server.listen(PORT, err =>{
  if(err) {throw err};
  console.log('Server started!')
})
