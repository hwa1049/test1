// 필요한 모듈 선언
const express = require('express');
const app = express();

// 라우팅 모듈 선언
const router = require('./routes/index') (app);

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

// const hostname = '127.0.0.1';
const port = process.env.PORT || 3000;

// var server = app.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// })

var server = app.listen(port, () => {
    console.log(`Server running at `);
})
