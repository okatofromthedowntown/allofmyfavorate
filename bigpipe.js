const http = require('http');

const sleep = (ms) => {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
};

let app = http.createServer((request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/html',
    'charset': 'utf-8'
  });

  response.write('loading...<br>');

  return sleep(2000).then(() => {
    response.write('Charpter 1: 2000ms<br>');
    return sleep(3000);
  }).then(() => {
    response.write('Charpter 2: 3000ms<br>');
  }).then(() => {
    response.end();
  });
});

app.listen(5050);