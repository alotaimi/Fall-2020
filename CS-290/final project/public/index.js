var hidden = document.getElementsByClassName('hidden');
var exitAddQuest = document.getElementsByClassName('addQuest-hide-button');
var addQuest = document.getElementById('addQuest-add');
var addQuestButton = document.getElementById('add-quest-button');

let progressBar = document.getElementById('progress-bar');
let levelTracker = document.getElementById('current-level');
let level = parseInt(levelTracker.textContent);
let nameClass = document.getElementsByClassName("navbar-brand");
let name = nameClass[0].textContent;
//console.log(level);
var complete = document.getElementById("completed-quest");
console.log("complete : ", complete);
let maxExp = progressBar.max;
let currExp = progressBar.value
complete.addEventListener('click', check);

function check(){

	var checkbox = document.getElementsByClassName('form-check-input');
	var counter = 0;
	
	for(var i = 0; i< checkbox.length;i++){
		if(checkbox[i].checked){
			addExp(150,'/games');
			checkbox[i].checked = false;
		}
	}
	// var btn = document.getElementById('complete-button');
	// btn.style.display = "none";
	

}



function addExp(value, url) { // function that gets adds xp to the current progress bar
	

	console.log("html: ", levelTracker.innerHTML.trim());

	console.log("inside the xp function");
	currExp = currExp + value; // adds it first

	if (currExp >= maxExp) { // checks if a level up accured 
		alert("Good job ! You have just leveled up.");
		currExp = currExp - maxExp; // semi-reset the progress bar, keeping overflown xp
		if(currExp == 0)
			currExp = 1; //Error where thinks currExp is null, so 1 is the lowest avaible
		maxExp = maxExp + 150; // makes it harder to level up
		level = level + 1; // level up
	}




	// //  progressBar.max = maxExp; // set the values.
	// //  progressBar.value = currExp;
	// //  levelTracker.innerHTML = level;
	addToDb_main(name, level, maxExp, currExp, url);
}


function addToDb_main(name, level, max, current, url) {
	var request = new XMLHttpRequest();
	var requestURL = url;
	console.log("URL IS : ", requestURL);
	request.open('POST', requestURL);

	var reqBody = JSON.stringify({
		name: name,
		level: level,
		curr: current,
		max: max
	});
	
	request.setRequestHeader('Content-Type', 'application/json');
	request.addEventListener('load', function (event) {
		console.log(event.target.status);
		if (event.target.status == 200) {
			progressBar.max = max; // set the values.
			progressBar.value = current;
			levelTracker.textContent = level;

		}
		else
			console.log("whoops");
	})

	request.send(reqBody);
}

function rehideAddQuest(){
	for(var i = 0; i < hidden.length; i++){
		hidden[i].style.display = "none";
	}
	document.getElementById('addQuest-desc-inp').value = ""; 
	document.getElementById('addQuest-date-inp').value = "";
}

function addQuest_DB(desc, date){
	var request = new XMLHttpRequest();
	var requestURL = '/';
	request.open('POST', requestURL);

	var reqBody = JSON.stringify({
		desc: desc, 
		date: date
	});

	request.setRequestHeader('Content-Type', 'application/json');
	request.addEventListener('load', function(event){
		if(event.target.status == 200){
			//Code for adding onto client
		}
		else
			window.alert('Error adding quest:' + event.target.response);
	})
	console.log("Made it here");
	addExp(50, '/games'); // rewards xp when user adds a quest.
	console.log(reqBody);
	request.send(reqBody);
}

for(var i=0; i < exitAddQuest.length; i++)
	exitAddQuest[i].addEventListener('click', rehideAddQuest);

addQuest.addEventListener('click', function(){
	var desc = document.getElementById('addQuest-desc-inp').value.trim(); 
	var date = document.getElementById('addQuest-date-inp').value.trim();

	// console.log('Title:', title);
	// console.log('Description:', desc);
	// console.log('Date:', date);

	if(desc == '' || date == ''){
		window.alert("You didn't enter all info");
	}
	else{
		addQuest_DB(desc, date);
		rehideAddQuest();
	}
});

addQuestButton.addEventListener('click', function(){
	for(var i = 0; i < hidden.length; i++){
		hidden[i].style.display = "block";
	}
})

