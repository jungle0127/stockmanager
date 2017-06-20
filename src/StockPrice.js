"use strict";

var mysql = require('mysql');
var http = require('http');
var stockManager = require('./SinaStockInfoParser');

var db_name = 'stock';
var client = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'lotus',
	database:db_name
});


client.connect();

client.query('select * from stock_metadata',function(error,rows,fields){
	if(error){
		console.log(error);
		return;
	}
	for(var row_item in rows){
		stockManager.get_price(rows[row_item].seName,rows[row_item].stockCode);
		setTimeout(function(){
			
		},5000);
	}
});
client.end();
