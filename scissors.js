let userScore = 0;
let computerScore = 0;
let draws = 0;
let msg = document.querySelector(`#msg`);
let userScorep = document.querySelector(`#you`);
let computerScorep = document.querySelector(`#comp`)
let Drawp = document.querySelector(`#both`)
const choices = document.querySelectorAll(`.choice`);

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const radIndx = Math.floor(Math.random() * 3);
    return options[radIndx]; 
}

const Draw = () => {
    console.log("It's a draw!");
}

const playGame = (userChoice) => {
    console.log("userChoice is ",userChoice);
    const computerChoice = genCompChoice();
    console.log("computerChoice is ", computerChoice);

    if(userChoice === computerChoice) {
        Draw();
        console.log("It's a tie!");
        draws++;
        Drawp.innerHTML = draws;
        msg.innerHTML = `<h2>It's a tie! </h2>`;
        msg.style.backgroundColor = "yellow";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock" )  || (userChoice === "scissors" && computerChoice === "paper")
    ){
        userScore++;
        userScorep.innerText = userScore;
        msg.innerHTML = `<h2>You win! your ${userChoice} beats ${computerChoice}</h2>`;
        console.log(`You win! your ${userChoice} beats ${computerChoice}`);
        msg.style.backgroundColor = "rgb(160, 255, 59";
    } else {
        computerScore++;
        computerScorep.innerHTML =computerScore;
        msg.innerHTML = `<h2>Computer wins! ${computerChoice} beats your ${userChoice}</h2>`;
        console.log("Computer wins!");
        msg.style.backgroundColor = "red";
    }
    console.log(`User Score: ${userScore}, Computer Score: ${computerScore}`);

}

choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener(`click`, () => {
        let userChoice = choice.getAttribute("id");
        console.log("choice is clicked", userChoice);
        playGame(userChoice);
    })
})