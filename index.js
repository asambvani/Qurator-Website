'use strict'; 
const http = require('http');
const url = require('url'); 
const fs = require('fs'); 
const path = require('path'); 
const express = require('express'); 

let mimes = {

	'.htm': 'text/html', 
	'.css': 'text/css', 
	'.js': 'text/javascript',
	'gif': 'image/jpeg', 
	'jpg': 'image/jpg',
	'png': 'image/png'

}

var app = express(); 
app.set('port', process.env.PORT || 3000);

function fileAccess(filepath) {
	return new Promise((resolve, reject) => {

		fs.access(filepath, fs.F_OK, error => {
			if(!error){
				resolve(filepath); 
			} else {
				reject(error);
			}
		})

	}); 
}

function streamFile(filepath){
	return new Promise((resolve, reject) => {
			let fileStream = fs.createReadStream(filepath); 
			
			fileStream.on('open', () => {
				resolve(fileStream); 
			});

			fileStream.on('error',() => {
				reject(error); 
			});
	});

}

function webserver(req, res) {
	// if the route requested is '/', then load 'index.hml' or else 
	// load the requested file(s)

	let baseURI = url.parse(req.url); 
	let filepath = __dirname + (baseURI.pathname == '/' ? '/index.htm': baseURI.pathname); 
	// Check if the requested file is accessible or not
	let contentType = mimes[path.extname(filepath)]; 

	fileAccess(filepath)
		.then(streamFile)
		.then(fileStream => {
			res.writeHead(200, {'Content-type': contentType}); 
			//res.end(content, 'utf-8');
			fileStream.pipe(res); 
		})
		.catch(error => {
			res.writeHead(404);
			res.end(JSON.stringify(error)); 
		});
}

http.createServer(webserver).listen(app.get('port'), () => console.log('Webserver running on port '+ app.get('port'))); 