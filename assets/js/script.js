document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');
    for(let button of buttons){
        button.addEventListener('click', function(){
            if(this.getAttribute('data-type') === 'submit'){
                checkAnswer()
            }else{
                let gameType = this.getAttribute('data-type');
                startGame(gameType)
            }
        })
    }
    document.getElementById('answer-box').addEventListener('keydown', function(e){
        if(e.key === 'Enter'){
            checkAnswer();
        }
    })
    startGame('addition')
})

/**
 * The main game loop, called when the first script has loaded
 * and after the user's answer has been checked
 */
function startGame(gameType){
    let num1 = (Math.floor(Math.random() * 25)) + 1;
    let num2 = (Math.floor(Math.random() * 25)) + 1;
    document.getElementById('answer-box').value = '';
    document.getElementById('answer-box').focus();

    if(gameType === 'addition'){
        displayAdditionQuestion(num1, num2)
    }else if(gameType === 'subtract'){
        displaySubtractionQuestion(num1, num2)
    }else if(gameType === 'multiply'){
        displayMultiplicationQuestion(num1, num2)
    }else if(gameType === 'divide'){
        displayDivisionQuestion(num1, num2)
    }else{
        alert(`unknown game type, ${gameType}`);
        throw `Unknown game type, ${gameType}, aborting!`
    }
}

/**
 * check the userAnswer against the first element of the calculateAnswer array
 */
function checkAnswer(){
    let correctAnswer = calculateAnswer();
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let isCorrect = userAnswer === correctAnswer[0];

    if(isCorrect){
        alert('Well done, you got it right!');
        incrementScore();
    }else{
        alert(`Sorry but you guessed ${userAnswer} and the correct answer was ${correctAnswer[0]}`);
        incrementWrongAnswer();
    }
    startGame(correctAnswer[1]);
}

/**
 * Gets the operands (numbers) and operator (game type)
 * directly from the DOM and calculates the answer
 */
function calculateAnswer(){
    let operand1 = parseInt(document.getElementById('operand1').textContent);
    let operand2 = parseInt(document.getElementById('operand2').textContent);
    let operator = document.getElementById('operator').textContent;

    if(operator === '+'){
        return [operand1 + operand2, 'addition']
    }else if(operator === '-'){
        return [operand1 - operand2, 'subtract']
    }else if(operator === 'x'){
        return [operand1 * operand2, 'multiply']
    }else if(operator === '/'){
        return [operand1 / operand2, 'divide']
    }else {
        alert(`Unknown operator, ${operator}`);
        throw `Unknown operator, ${operator}, aborting!`
    }
}

function incrementScore(){
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = oldScore + 1;    

}

function incrementWrongAnswer(){
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = oldScore + 1;  
}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}

function displaySubtractionQuestion(operand1, operand2){
    document.getElementById('operator').textContent = '-';
    document.getElementById('operand1').textContent = operand1 > operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 > operand2 ? operand2 : operand1;
   
    // if(operand1 < operand2){
    //     document.getElementById('operand1').textContent = operand2;
    //     document.getElementById('operand2').textContent = operand1;
    // }else{
    //     document.getElementById('operand1').textContent = operand1;
    //     document.getElementById('operand2').textContent = operand2;
    // }
    
}

function displayMultiplicationQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion(operand1, operand2){
    document.getElementById('operator').textContent = '/';
    if (operand1 % operand2 === 0) {
        document.getElementById('operand1').textContent = operand1;
        document.getElementById('operand2').textContent = operand2;
    } else {
        document.getElementById('operand1').textContent = operand1 * operand2;
        document.getElementById('operand2').textContent = operand2;
    }
}
