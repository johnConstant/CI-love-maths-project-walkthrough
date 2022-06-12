document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                alert('submitted');
            }else{
                let gameType = this.getAttribute('data-type');
                startGame(gameType)
            }
        })
    }
    startGame('addition')
})

/**
 * The main game loop, called when the first script has loaded
 * and after the user's answer has been checked
 */
function startGame(gameType){
    let num1 = (Math.floor(Math.random() * 25)) + 1;
    let num2 = (Math.floor(Math.random() * 25)) + 1;

    if(gameType === 'addition'){
        displayAdditionQuestion(num1, num2)
    // }else if(gameType === 'subtract'){
    //     displayAdditionQuestion(num1, num2)
    // }else if(gameType === 'multiply'){
    //     displayAdditionQuestion(num1, num2)
    // }else if(gameType === 'divide'){
    //     displayAdditionQuestion(num1, num2)
    }else{
        alert(`unknown game type, ${gameType}`);
        throw `Unknown game type, ${gameType}, aborting!`
    }
}

function checkAnswer(){}

function calculateAnswer(){}

function incrementScore(){}

function incrementWrongAnswer(){}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}

function displaySubtractionQuestion(){}

function displayMultiplicationQuestion(){}

function displayDivisionQuestion(){}
