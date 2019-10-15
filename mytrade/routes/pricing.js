var express = require('express');
var fs = require('fs');
var path = require("path");
var router = express.Router();


router.post('/', function(req, res, next) {
	var pricingData = req.body;
	fs.readFile(path.join(__dirname,"../public/json/pricing.json"), function(err,data){
		if(err){
			throw new Error(err);
		}
		//data 初始为二进制数据,需要进行格式转换
		var data = data.toString();
		data = JSON.parse(data);//转成对象
		data.push(pricingData);
		data = JSON.stringify(data)//再转成对象，用于存储
		fs.writeFile(path.join(__dirname,"../public/json/pricing.json"),data,function(err){
			if(err){
				throw new Error(err);
			}
			//新增成功
			res.send(true);
		});
		
		
	});
	//console.log(JSON.stringify(req.body));
});

module.exports = router;