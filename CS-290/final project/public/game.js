var Questions = [
    {
        "question": "Who is your favorite Professor",
        "answer": "Rob Hess",
        "hint": "He teaches CS courses, and a tea lover"
},
{
    "question": "How much does the human brain weigh? In pounds",
    "answer": "3",
    "hint": "between 1 and 4"
},
{
    "question": "What does the N stand for in NATO?",
    "answer": "North",
    "hint": "What's the opposite of south?"
},
{
    "question": "At what temperature are Celsius and Fahrenheit equal? In degrees",
    "answer": "-40",
    "hint": "It's Below 0"
},
{
    "question": "The Earth's air is composed of about what percentage of CO2? In Percentage",
    "answer": "0.04",
    "hint": "It's between 0 and 0.1"
},
{
    "question": "What planet is farthest from the sun?",
    "answer": "Neptune",
    "hint": "Starts with N"
},
{
    "question": "The study of the weather is called what?",
    "answer": "Meteorology",
    "hint": "Starts with M"
}
];
var answer;
var Correct;
var hint;
//Question Generator
function questionGen(){
    var random = [Math.floor(Math.random()*Questions.length)];
    document.getElementById("Question").textContent=Questions[random].question;
    Correct = Questions[random].answer;
    hint = "Hint: "+Questions[random].hint;
}
questionGen();
// Saving the answer
var answer_input = document.getElementById("Answer");
function saveAnswer(event){
    answer = event.currentTarget.value;
}
answer_input.addEventListener('change',saveAnswer);
//Clearning the text
function Clear() {
    answer_input.value = "";
}
// click button
var button = document.getElementsByClassName("btn-primary")
function Click(event){
if(answer.toLowerCase() == Correct.toLowerCase()){
    alert("Correct! You earned 10xp!");
    Clear();
    addExp(10, '/games'); // cheating? its ok
    questionGen();
  }
  else{
    alert("Wrong Answer! try again");
    if(hint){
    alert(hint);
    }
    Clear();
    return false;
  }
}
button[0].addEventListener('click',Click);