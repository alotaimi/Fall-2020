var addUserButton = document.getElementById('add-user-button');
var hidden = document.getElementsByClassName('hidden');
var exitAddUser = document.getElementsByClassName('addUser-hide-button');
var addUser = document.getElementById('addUser-add');

function rehideAddUser() {
	for (var i = 0; i < hidden.length; i++) {
		hidden[i].style.display = "none";
	}
}

addUser.addEventListener('click', function () {
	var name = document.getElementById('addUser-name-inp').value.trim();
	

	if (name == '') {
		window.alert("You didn't enter any Name");
	}
	else {
		//addQuest_DB(desc, date);
		rehideAddUser();
	}
})

addUserButton.addEventListener('click', function () {
	for (var i = 0; i < hidden.length; i++) {
		hidden[i].style.display = "block";
	}
})
