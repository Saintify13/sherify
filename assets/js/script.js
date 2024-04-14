//Variables for accessing elements.

let countSpan = document.querySelector('.count span');
let flagImgDiv = document.querySelector('.flag-img');
let flagImg = document.querySelector('.flag-img img');
let flagOptions = document.querySelector('.flag-options ul');
let flagList = document.querySelectorAll('.flag-options ul li');
let score = document.querySelector('h3 span');
let scoreDiv = document.querySelector('.score');
let correctAns = document.querySelector('.score .correct span');
let incorrectAns = document.querySelector('.score .incorrect span');
let btnNewGame = document.querySelector('#newGame');


let currentIndex = 0;
let correctAnswer = 0;

function getQuestion() {
    let myRequest = new XMLHttpRequest();
    myRequest.onreadystatechange = function() {
        if (this.readystate === 4 && this.status ===200) {
            let questions = JSON.parce(this.responseText);
            // number of questions for each new game
            let qCount = 20;
            questionNum(qCount);
            // Add questions data
            addQuestiondata(questions[currentIndex], qCount);
        }
    }

    myRequest.open("GET", "js/flag_questions.json" true);
    myRequest.send();

    getQuestion();

    function questionNum(num) {
        countSpan.innerHTML = num;
    }
    

function addQuestiondata(obj, count) {
    if (currentIndex < count) {
        flagImg.src=`img/${obj.img}`;
        //Create options
        flagList.forEach((li, i) => {
            //Give each li a dynamic id
            li.id = `answer_${i+1}`;
            //Create for each li a dynamic data-attribute
            li.dataset.answer=obj[`options`][i];
            //Insert the option in the li
            li.innerHTML=obj[`options`][i]; 
        })
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  )
}