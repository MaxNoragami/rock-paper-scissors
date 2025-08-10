import "./style.css";
import { setupGame } from "./game.js";

document.querySelector("#app").innerHTML = `
  <div class="container" id="container">
      
    <h1 class="title">Rock - Paper - Scissors</h1>
  
    <div class="choices">
      <button class="choice" data-choice="rock">🪨</button>
      <button class="choice" data-choice="paper">📜</button>
      <button class="choice" data-choice="scissors">✂️</button>
    </div>
  
    <div id="answerSection">
      <p id="player">PLAYER: <span class="answer">NONE</span></p>
      <p id="cpu">CPU: <span class="answer">NONE</span></p>
    </div>
  
    <p id="roundOutcome">NONE</p>
  
    <div id="scoreSection">
      <p id="player">PLAYER: <span class="score">0</span></p>
      <p id="cpu">CPU: <span class="score">0</span></p>
    </div>
  
    <footer><a href="https://maxim.contact" class="to-home">🍃 by maxim 🍃</a></footer>

  </div>
`;

const game = setupGame();

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    game.play(choice);
  });
});
