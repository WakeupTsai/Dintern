var querystring = require("querystring");
var fs = require("fs");
var formidable = require("formidable");




function start(res){
	console.log("Request handler 'start' was called.")
	fs.readFile('./views/index.html', function (err, html) {
	    if (err) {
	        throw err; 
	    }        
	    res.writeHeader(200, {"Content-Type": "text/html"});  
	    res.write(html);  
	    res.end();
	});
}

function test(res){
	console.log("Request handler 'start' was called.")
	fs.readFile('./views/test.html', function (err, html) {
	    if (err) {
	        throw err; 
	    }        
	    res.writeHeader(200, {"Content-Type": "text/html"});  
	    res.write(html);  
	    res.end();
	});
}

function upload(res,req){
	console.log("Request handler 'upload' was called.");
	
	var form = new formidable.IncomingForm();
	console.log("about to parse");
	form.parse(req,function(error, fields, files){
		console.log("parsing done");
		fs.renameSync(files.upload.path,"/Users/USER/Desktop/server/tmp/test.png");
		res.writeHead(200,{"Content-Type ":"text/html"});
		res.write("received image:<br/>");
		res.write("<img src='/show' />");
		res.end();
	});
}

function show(res){
	console.log("Request handler 'show' was called.");
	fs.readFile("/Users/USER/Desktop/server/tmp/test.png","binary",function(error,file){
		if(error){
			res.writeHead(200,{"Content-Type":"text/plain"});
			res.write(error + "\n");
			res.end();
		}
		else {
			res.writeHead(200,{"Content-Type":"text/plain"});
			res.write(file,"binary");
			res.end();
		}
	});
}

exports.start = start;
exports.test = test;
exports.upload = upload;
exports.show = show;









