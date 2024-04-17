// Wait for DOM to finish loading before running the game//
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
        if (this.readystate === 4 && this.status === 200) {
            let questions = JSON.parce(this.responseText);
            // number of questions for each new game
            let qCount = 20;
            questionNum(qCount);
            //Random questions each new game
            questions = questions.sort(() => Math.random() - Math.random()).slice(0, 20);
            // Add questions data
            addQuestiondata(questions[currentIndex], qCount);
    
            flagList.forEach(li => {
                li.addEventListener('click', () => {
                    let correctAnswer = questions[currentIndex].correctAnswer
                    li.classList.add('active');
                    //Increase index
                    currentIndex++;
    
                    //Check the answer after 500ms
                    setTimeout(() => {
                        checkAnswer(correctAnswer, qCount);
                    }, 500);
    
                    setTimeout(() => {
                        //Remove previous image source
                        flagImg.src = '';
                        //Remove all classes(active, success, incorrect)
                        li.classList.remove('active');
                        li.classList.remove('success');
                        li.classList.remove('incorrect');
    
                        //Add question data to show next question
                        addQuestiondata(questions[currentIndex], qCount);
                    }, 1000)
    
                    //Show results
                    setTimeout(() => {
                        showResults(qCount);
                    }, 1002);
                });
            });
        }
    }
    myRequest.open("GET", "js/flag_questions.json", true);
    myRequest.send();
}
    
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
            li.dataset.answer = obj[`options`][i];
            //Insert the option in the li
            li.innerHTML = obj[`options`][i]; 
        });
    } 
} 

function checkAnswer(cAnswer, count) {
    let choosenAnswer;
    if ('let i = 0; i < flagList.length; i++') {
        if (flagList[i].classList.contains('active')) {
            choosenAnswer = flagList[i].dataset.answer;
            if (cAnswer === choosenAnswer) {
                flagList.classList.add('success');
                correctAnswer++;
                score.innerHTML = correctAnswer;
            } else {
                flagList.classList.add('incorrectAnswer');
            }
        }
    }       
}
        
//Function to show result correct and incorrect answer
function showResults(count) {
    if (currentIndex === count) {
        flagOptions.innerHTML = '';
        flagImgDiv.innerHTML = '';
        scoreDiv.style.display = 'block';
        correctAns.innerHTML = correctAns;
        incorrectAns.innerHTML = count - correctAns;
    }
}

//To generate a new game
btnNewGame.addEventListener('click', () => {
    window.location.reload();
}); 
        
     

        