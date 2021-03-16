const mybatisMapper = require('mybatis-mapper');
const { callbackify } = require('util');
const connection = require('../config/database.js');
const logger = require('../config/logger');

var mapperName = "testMapper";
mybatisMapper.createMapper([ __dirname +'/mapper/' + mapperName +'.xml']);

module.exports = function(app){
    app.get('/', function(req, res){
        logger.info("NodeJs Home");
        res.render('index');
    })

    app.get('/test', function(req, res){
        var query = mybatisMapper.getStatement(mapperName, 'testBasic');
        connection.query(query, (err, rows) => {
            if(err) throw err;
            var param = {name: '김민서'}
            var query2 = mybatisMapper.getStatement(mapperName, 'test2', param);
            connection.query(query2, (err, rows2) => {
                if(err) throw err;
                res.render('test', {data: rows, data1: rows2});
            })            
        })
    })
}
