var handlebars = require('handlebars');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var exphbs = require('express-handlebars');
//var path = require('path'); Maybe won't need

var questsData = require('./questsData.json');
var userData = require('./userData.json');
let addUsers = { user: userData }

var app = express();
var port = process.env.PORT || 3459;

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.static('public'));

app.get('/test', function (req, res, next) {
	res.status(200).render('welcome', {
		addUsers: userData

	});
	console.log("user data ===: ", addUsers)
})

app.get('/', function (req, res, next) {
	var Data = { Data: userData[0] }
	console.log("data ====: ", Data)
	res.status(200).render('mainPage', {
		name: userData[0].name,
		currExp: userData[0].currExp,
		maxExp: userData[0].maxExp,
		level: userData[0].level,
		Quests: questsData
	});
	
})

app.post('/', function(req, res, next){
	if(req.body && req.body.desc && req.body.date){
		questsData.push({
			desc: req.body.desc,
			data: req.body.date
		})
		console.log("Data to add:", questsData);
		fs.writeFile(
			__dirname + '/questsData.json',
			JSON.stringify(questsData, null, 2),
			function (err, data) {
	          if (err) {
	            console.log("  -- err:", err);
	            res.status(500).send("Error saving quest in dc");
	          } 
	          else {
	            res.status(200).send("Quest added succesfully")
	          }
	        }
		);
	}
	else
		res.status(400).send("Error with data");
});

app.post('/games', function (req, res, next) {
	console.log("rec.body", req.body);
	if (req.body && req.body.level && req.body.curr && req.body.max && req.body.name) {
		var nameIndex = -1;
		for (var i = 0; i < userData.length; i++) {
			if (userData[i].name == req.body.name)
				nameIndex = i;
		}
		if (nameIndex == -1) {
			console.log("Couldnt find name")
			userData.push({
				name: req.body.name,
				level: req.body.level,
				currExp: req.body.curr,
				maxExp: req.body.max
			});
		}
		else {
			console.log("Found name")
			userData[nameIndex] = ({
				name: req.body.name,
				level: req.body.level,
				currExp: req.body.curr,
				maxExp: req.body.max
			});
		};
		console.log("userinfo:", userData);
		fs.writeFile(
			__dirname + '/userData.json',
			JSON.stringify(userData, null, 2),
			function (err, data) {
				if (err) {
					console.log("  -- err:", err);
					res.status(500).send("Error saving quest in dc");
				}
				else {
					res.status(200).send("Data succesfully stored");
				}
			}
		);
	}
	else {
		res.status(400).send("not all the data needed were recived");
	}
})

app.get('/games', function (req, res, next) {
	res.status(200).render('game', userData[0]);
})

app.get('*', function (req, res) {
	res.status(404).render('404', {
		url: req.url
	});
});

app.listen(port, function(){
	console.log("Listening on port: ", port);
})