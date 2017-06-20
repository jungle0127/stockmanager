"use strict";

var http = require('http');

var get_price = function(seName, stockCode) {
	var stock_info_reg = /"(.*)"/;
	var stockId = seName + stockCode;
	http.get('http://hq.sinajs.cn/list=' + stockId, function(res) {
		res.on('data', function(chunk) {
			var res_data = chunk.toString();
			res_data.replace(stock_info_reg, function(full_data, data) {
				console.log(data.split(',')[3],stockId);
				
			});
		});
	}).end();
	
};

exports.get_price = get_price;