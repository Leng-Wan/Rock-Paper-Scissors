let humanScore = 0;
let computerScore = 0;


function getComputerChoice()
{
    let choice = Math.floor(Math.random()*3 + 1);
     if(choice == 1 )
    {
      return "Rock";
    }
    else if(choice == 2 )
    {
      return "Paper"
    }
    else 
    {
      return "Scissors"
    }
}


function getHumanChoice(symbol)
{
    symbol = symbol.charAt(0).toUpperCase() + symbol.slice(1).toLowerCase();

    if(symbol == 'Rock')
    {
        return symbol;
    }

    else if(symbol == 'Paper')
    {
        return symbol;
    }
    else if(symbol =='Scissors')
    {
        return symbol;
    }
    else 
    {
        return "invalid choice"
    }
}

function playRound(humanChoice, computerChoice)
{
 
if((humanChoice == 'Rock') && (computerChoice == 'Scissors'))
 {
    humanScore++;
    console.log(`Human wins, score increase by ${humanScore}`)
 }

 else if((humanChoice == 'Rock') && (computerChoice == 'Paper'))
 {
    computerScore++;
    console.log(`Machine wins, score increase by ${computerScore}`)
 }
 else if ((humanChoice == 'Scissors') && (computerChoice == 'Paper'))
 {
    humanScore++
    console.log(`Human wins, score increase by ${humanScore}`)
 }
 else if((humanChoice == 'Scissors') && (computerChoice == 'Rock'))
 {
    computerScore++;
    console.log(`Machine wins, score increase by ${computerScore}`)
 }
 else if((humanChoice == 'Paper') && (computerChoice == 'Scissors'))
 {
    computerScore++;
    console.log(`Machine wins, score increase by ${computerScore}`)
 }
 else if((humanChoice == 'Paper') && (computerChoice == 'Rock'))
 {
    humanScore++;
    console.log(`Human wins, score increase by ${humanScore}`)
 }
 else if(humanChoice == computerChoice)
 {
    console.log( "It's a tie")
 }

}


function playGame(round)
{
    for(let i=0; i< round; i++)
    {
        let humanChoice = prompt("Enter your choice")
        let byHumanChoice = getHumanChoice(humanChoice)
        let byMachineChoice =getComputerChoice()

        console.log(byHumanChoice)
        console.log(byMachineChoice)
        playRound(byHumanChoice, byMachineChoice )
    }
}

let round = Number(prompt("Number of round you want to play....."))
playGame(round)

console.log(`Human total score ${humanScore}`)
console.log(`Computer total Score ${computerScore}`)

