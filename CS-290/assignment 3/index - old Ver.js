/*
 * Write your client-side JS code in this file.  Don't forget to include your
 * name and @oregonstate.edu email address below.
 *
 * Name:Mishary Alotaibi
 * Email:Alotaimi@oregonstate.edu
 */

 /*
 1 - close when anything except the div is clicked
 */
 function postGenerator(ItemName, URL, Price, City,Condition){
    var Postdiv = document.createElement("div");
    Postdiv.classList.add("post");
    Postdiv.setAttribute("data-price",Price);
    Postdiv.setAttribute("data-city",City);
    Postdiv.setAttribute("data-condition",Condition);
    var PostContents = document.createElement("div");
    PostContents.classList.add("post-contents");
    Postdiv.appendChild(PostContents);

    var PostImageContainer = document.createElement("div");
    PostImageContainer.classList.add("post-image-container");
    PostContents.appendChild(PostImageContainer);

    var image = document.createElement("img");
    image.setAttribute("src", URL);
    image.setAttribute("alt", ItemName);
    PostImageContainer.appendChild(image);

    var PostInfoContainer = document.createElement("div");
    PostInfoContainer.classList.add("post-info-container");
    PostContents.appendChild(PostInfoContainer);

    var postA = document.createElement("a");
    postA.setAttribute("href","#");
    postA.classList.add("post-title");
    postA.textContent = ItemName;
    PostInfoContainer.appendChild(postA);

    var spanPrice = document.createElement("span");
    spanPrice.classList.add("post-price");
    spanPrice.textContent = "$"+Price;
    PostInfoContainer.appendChild(spanPrice);
    
    var spanCity = document.createElement("span");
    spanCity.classList.add("post-city");
    spanCity.textContent = "("+City + ")";
    PostInfoContainer.appendChild(spanCity);

    var Posts = document.getElementById('posts');
    Posts.appendChild(Postdiv);
 }
/////////////////////////////////////////////////////////////////////////////////////////////////////
function clearinig(){
  var textInputpost = document.querySelectorAll('input[type="text"]');
  var numberInputpost = document.querySelectorAll('input[type="number"]');
  for(var i =0; i < textInputpost.length; i++){
    if(textInputpost[i].value !==""){
      textInputpost[i].value = '';
    }
  }
  for(var i =0; i < numberInputpost.length; i++){
    if(numberInputpost[i].value !==""){
      numberInputpost[i].value = '';
    }
  }
  
var radiobuttonn = document.getElementsByName("post-condition");
for(var i=0;i<radiobuttonn.length;i++){
if(i == 0){
  radiobuttonn[i].checked = true;
}
else{
  radiobuttonn[i].checked = false;
}
}
}
//  sell fucntion when someone wants to sell something
var SellButton = document.getElementById("sell-something-button");
 function sell(event){
   var sellpage = document.getElementsByClassName('hidden');
   for(var i = 0; i < sellpage.length; i++){
    sellpage[i].style.display = "block";
 }
 event.stopPropagation();
}
 SellButton.addEventListener('click',sell);

//  cancel sell page
var cancel = document.getElementById('modal-cancel');
function cancelation(event){
  var sellpage = document.getElementsByClassName('hidden');
  for(var i = 0; i < sellpage.length; i++){
    if (sellpage[i].style.display !== "none") {
      sellpage[i].style.display = "none";
    }
}
clearinig();
}
cancel.addEventListener('click',cancelation);

// X button in sell page
var xClose = document.getElementById('modal-close');
function Xclose(event){
  var sellpage = document.getElementsByClassName('hidden');
  for(var i = 0; i < sellpage.length; i++){
    if (sellpage[i].style.display !== "none") {
      sellpage[i].style.display = "none";
    }
}
clearinig();
}
xClose.addEventListener('click',Xclose);

   //Create Post
   var CreatePost = document.getElementById('modal-accept');
   function Createpost(event){
    var radiobuttons = document.querySelector('input[name="post-condition"]:checked')
    Cond = radiobuttons.value;
  if(Item&&Photo&&SellPrice&&Cityy){
    postGenerator(Item,Photo,SellPrice,Cityy,Cond);
    clearinig();
  }
  else{
    event.preventDefault();
    alert("Please Complete the Required Information");
    return false;
  }
  var sellpage = document.getElementsByClassName('hidden');
  for(var i = 0; i < sellpage.length; i++){
    if (sellpage[i].style.display !== "none") {
      sellpage[i].style.display = "none";
    }
}
  }
  CreatePost.addEventListener('click',Createpost);
//saved items
var Item;
var Photo;
var SellPrice;
var Cityy;
var Cond;
//Item description
var itemDesc = document.getElementById('post-text-input');
function saveItem(event){
  Item = event.currentTarget.value;
 }
 itemDesc.addEventListener('change',saveItem);

 //Photo URL
 var PhotoURL = document.getElementById('post-photo-input');
function savePhoto(event){
  Photo = event.currentTarget.value;
 }
 PhotoURL.addEventListener('change',savePhoto);

 //Selling price ($)
 var SellingPrice = document.getElementById('post-price-input');
 function savePrice(event){
  SellPrice = event.currentTarget.value;
  }
  SellingPrice.addEventListener('change',savePrice);

  //City
  var CityChoice = document.getElementById('post-city-input');
  function saveCity(event){
    Cityy = event.currentTarget.value;
   }
   CityChoice.addEventListener('change',saveCity);

////////////////////////////////////////////////////////////////////////////////////////////
// saving the text filter
 var textInput = document.getElementById('filter-text');
 var text;
 function saveText(event){
  text = event.currentTarget.value;
 }
 textInput.addEventListener('change',saveText);

//  saving the price min
var Pricemin = document.getElementById('filter-min-price');
var MinPrice;
function saveMinPrice(event){
  MinPrice = event.currentTarget.value;
 }
 Pricemin.addEventListener('change',saveMinPrice);

//  saving the price max
var Pricemax = document.getElementById('filter-max-price');
var MaxPrice;
function saveMaxPrice(event){
  MaxPrice = event.currentTarget.value;
 }
 Pricemax.addEventListener('input',saveMaxPrice);
// save city
var ConDoc = document.getElementById('filter-condition');
var CityFilter;
function saveCityFilter(event){
  CityFilter = event.currentTarget.value;
 }
 ConDoc.addEventListener('click',saveCityFilter);

// save condition
var values = [];
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
for(var i =0; i < checkboxes.length; i++){
  values.push(checkboxes[i].value);
}
function saveCon(event){
  for(var i =0; i < checkboxes.length; i++){
    values.push(checkboxes[i].value);
  }
}
/////////////////////////////////////////////////////////////////////////////////////////////////
//  Update Button
var Post_titles = document.getElementsByClassName('post-title');
var Post_Price = document.getElementsByClassName('post-price');
var Post_cities = document.getElementsByClassName('post-city');
var Posts = document.getElementsByClassName("post");
var Update = document.getElementById('filter-update-button');
// Post_titles[i].innerHTML
function update(){
  if(text){
    var i = Posts.length;
    var searcher;
    var lowercase;
    text = text.toLowerCase();
    while(i--){
      lowercase = Post_titles[i].innerHTML.toLowerCase();
      searcher = lowercase.search(text);
        if(searcher == -1){
        Posts[i].remove();
    }
  }
}
  if(MinPrice){
    var value;
    var temp;
    var i = Posts.length;
    while(i--){
      temp = Post_Price[i].innerHTML;
      temp = temp.replace('$','');
      value = parseInt(temp);
      if(value < MinPrice){
        Posts[i].remove();
    }
  }
}
  if(MaxPrice){
    var value;
    var temp;
    var i = Posts.length;
    while(i--){
      temp = Post_Price[i].innerHTML;
      temp = temp.replace('$','');
      value = parseInt(temp);
      if(value > MaxPrice){
        Posts[i].remove();
    }
  }
  }
  var CityFilter = document.getElementById("filter-city").value;
  if(CityFilter != ''){
    var temp;
    var name;
    var i = Posts.length;
    while(i--){
      temp = Post_cities[i].innerHTML;
      name = temp.replace(/[()]/g,'');
      if(name != CityFilter){
        Posts[i].remove();
      }
    }
  }
var checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
if(checkboxes.length != 0){
  var i = Posts.length;
  var counter;
  while(i--){
    counter = 0;
    for(var j =0; j < checkboxes.length; j++){
      if(checkboxes[j].value == Posts[i].getAttribute('data-condition')){
        counter++;
      }
    }
    if(counter == 0){
      Posts[i].remove();
    }
  }
}
}
Update.addEventListener('click',update);