document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert('submitted');
            }else{
                let gameType = this.getAttribute('data-type');
                alert(`${gameType}`);
            }
        })
    }
})

function startGame(){}

function checkAnswer(){}

function calculateAnswer(){}

function incrementScore(){}

function incrementWrongAnswer(){}

function displayAdditionQuestion(){}

function displaySubtractionQuestion(){}

function displayMultiplicationQuestion(){}

function displayDivisionQuestion(){}
