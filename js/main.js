
//Inserção e validação dos valores
const number1 = document.getElementById("number1")
number1.addEventListener('change', hendleInputNumber)

const number2 = document.getElementById("number2")
number2.addEventListener('change', hendleInputNumber)

function hendleInputNumber(event) {
    if (isNumber(event.target.value)) {
        event.target.classList.remove("input-error")
    }
    else {
        event.target.classList.add("input-error")
    }
}

function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

//Lógica de calculo com retorno de valor
const result = document.getElementById("result-box");

const plus = document.getElementById("btn-plus");
plus.addEventListener('click', handlePlusClick);

const times = document.getElementById("btn-times")
times.addEventListener('click', handleTimesClick);

function handlePlusClick(event){
    event.preventDefault();
    result.innerHTML = Number(number1.value) + Number(number2.value);
}

function handleTimesClick(event){
    event.preventDefault();
    result.innerHTML = Number(number1.value) * Number(number2.value);
}

const clear = document.getElementById("btn-clear")
clear.addEventListener('click', handleClearClick)

//Limpar conteudo
function handleClearClick(event){
    number1.value = "";
    number1.classList.remove("input-error");

    number2.value = "";
    number2.classList.remove("input-error");
    result.innerHTML = 0;
}
