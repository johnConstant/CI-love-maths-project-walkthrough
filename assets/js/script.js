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

/**
 * The main game loop, called when the first script has loaded
 * and after the user's answer has been checked
 */
function startGame(){
    let num1 = (Math.floor(Math.random * 25)) + 1;
    let num2 = (Math.floor(Math.random * 25)) + 1;
}

function checkAnswer(){}

function calculateAnswer(){}

function incrementScore(){}

function incrementWrongAnswer(){}

function displayAdditionQuestion(){}

function displaySubtractionQuestion(){}

function displayMultiplicationQuestion(){}

function displayDivisionQuestion(){}
