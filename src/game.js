export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

export function setupGame(choice) {
  const playerAnswer = document.getElementById("answerSection").children[0].firstElementChild;
  const playerScoreElement = document.getElementById("scoreSection").children[0].firstElementChild;
  const cpuAnswer = document.getElementById("answerSection").children[1].firstElementChild;
  const cpuScoreElement = document.getElementById("scoreSection").children[1].firstElementChild;
  const roundOutcome = document.getElementById("roundOutcome");
  const choices = ["rock", "paper", "scissors"];

  function play(choice) {
      let cpuChoice = choices[Math.floor(Math.random() * 3)];
      let isWin = null;

      roundOutcome.style.visibility = "visible";

      playerAnswer.textContent = choice.toUpperCase();
      cpuAnswer.textContent = cpuChoice.toUpperCase();

      console.log(choice, cpuChoice);
      if (cpuChoice === choice) {
          roundOutcome.textContent = "TIE";
          roundOutcome.style.color = "khaki";
      }
      else {
          switch (choice) {
              case "rock":
                  isWin = (cpuChoice == "scissors");
                  break;
              case "paper":
                  isWin = (cpuChoice == "rock");
                  break;
              case "scissors":
                  isWin = (cpuChoice == "paper");
                  break;
          }

          let cpuScore = Number(cpuScoreElement.textContent);
          let playerScore = Number(playerScoreElement.textContent);

          if (isNaN(playerScore) || isNaN(cpuScore)) {
              console.warn("Error: Score ain't a Number, round doesn't count");
              roundOutcome.textContent = "ERROR";
              roundOutcome.style.color = "darkred";
          }

          else if (isWin) {
              roundOutcome.textContent = "YOU WIN";
              roundOutcome.style.color = "lightgreen";
              playerScore += 1;
              cpuScore -= 1;
              playerScoreElement.textContent = playerScore;
              cpuScoreElement.textContent = cpuScore;
          }
          else if (!isWin) {
              roundOutcome.textContent = "YOU LOSE";
              roundOutcome.style.color = "tomato";
              playerScore -= 1;
              cpuScore += 1;
              playerScoreElement.textContent = playerScore;
              cpuScoreElement.textContent = cpuScore;
          }
      }
  }

  return {play};
}
