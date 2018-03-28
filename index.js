const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');
//const bodyParser = require('body-parser');
const port = process.env.PORT || 3004;

const app = express();

const storage = multer.diskStorage({
	destination: './public/uploads/',
	filename: function(req, file, cb){
		cb(null, file.fieldname + Date.now() + path.extname(file.originalname));
	}
});

const upload = multer({ storage: storage }).any();//single('myImage');

app.set('view engine', 'ejs');

app.use(express.static('./public'));

//below are attempts to somehow "bind middleware" as I understand it, no difference
//app.use(upload);
//app.use(multer({dest:'./public/uploads/'}).single('file'));



app.get('/', (req, res) => res.render('index'));

app.post('/upload', (req, res) => {
	upload(req, res, (err) => {
		if(err){
			res.render('index', {msg: err});
		}
		else {
			console.log(req.file);
			//              ^^^^  error here
			//Webstorm IDE: "unresolved variable file"
			//Browser upon submit: "Error: Unexpected field" and callstack.
			//runs but crashes upon submit.
			//suspect something wrong with typescript, yet included @types/multer & @types/express in package.json.
			res.send('test');
		}
	});
});

app.listen(port, function () {
	console.log('listening on port ', port);
});