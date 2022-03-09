var secretNumber = parseInt(Math.random() * 11)
var attempts = 3;
var attemptsElement = document.getElementById("attempts");
var outputElement = document.getElementById("resultado");
var button = document.getElementById("enviar");
var inputElement = document.getElementById("valor");
attemptsElement.innerHTML = "Tentativa(s) restante(s): " + attempts;

function Chutar() { 
    var guess = inputElement.value;

  if (attempts > 0 && guess != "") {
    if (guess >= 0 && guess <= 10) {
      attempts -= 1;
      var result = check(guess);
    } else {
      outputElement.style.color = "yellow";
      outputElement.innerHTML = "Digite apenas número de 0 a 10!";
    }
  }

  attemptsElement.innerHTML = "Tentativa(s) restante(s): " + attempts;
  if (attempts < 1 && !result) {
    outputElement.style.color = "red";
    outputElement.innerHTML =
      "As suas tentativas acabaram, o número era " + secretNumber;
    disable();
  }
  inputElement.value = "";
}

function check(guess) {
  if (guess == secretNumber) {
    outputElement.style.color = "green";
    outputElement.innerHTML = "Parabéns! Você acertou!";
    disable();
    return true;
  } else if (guess > secretNumber) {
    outputElement.style.color = "white";
    outputElement.innerHTML = "O número é menor do que o digitado!";
  } else if (guess < secretNumber) {
    outputElement.style.color = "white";
    outputElement.innerHTML = "O número é maior do que o digitado!";
  }
  return false;
}

function disable() {
  inputElement.disabled = true;
  button.disabled = true;
}
