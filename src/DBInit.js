/**
 * http://usejsdoc.org/
 */
'use strict';

var stock_data = require('./SZStockInfo');
var mysql = require('mysql');

var db_name = 'stock';
var client = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'lotus',
	database:db_name
});

client.connect();
var data = stock_data.get_data();
for(var item in data){
	client.query('insert into stock_metadata set ?',{stockCode:data[item].val1,stockName:data[item].val2,seName:'SZ'},function(error,results,fields){
		if(error){
			console.log(error);
			return;
		}
		console.log(results.insertId);
	});
}
/*
client.query('select * from knowledge',function(error,rows,fields){
	if(error){
		console.log(error);
		return;
	}
	for(var row_item in rows){
		console.log(rows[row_item]);
	}
});
*/


client.end();

