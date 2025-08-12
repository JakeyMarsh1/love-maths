document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      // Handle button click
      if (this.getAttribute("data-type") === "submit") {
        alert("You Clicked Submit!");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
      }
    });
  }
});

function runGame() {
  // Game logic goes here

  // Creates two random numbers between 1 and 25
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {
  // Answer checking logic goes here
}

function CalculateCorrectAnswers() {
  // Logic to calculate correct answers goes here
}

function incrementScore() {
  // Logic to increment the score goes here
}

function incrementWrongAnswers() {
  // Logic to increment the wrong answers goes here
}

function displayAdditionQuestion() {
  // Logic to display an addition question goes here
}

function displaySubtractQuestion() {
  // Logic to display a subtraction question goes here
}

function displayMultiplyQuestion() {
  // Logic to display a multiplication question goes here
}
