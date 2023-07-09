 

let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message=" "
let messageEl= document.getElementById("message-el")
console.log(messageEl)
let sumEl=document.getElementById("sum-el")
let cardsEl= document.getElementById("cards-el")



let player =
{
    name :"shubh",
    chips : 145

}
let playersEl = document.getElementById("player-el")
playersEl.textContent= player.name + " :$" + player.chips


function startGame()
{ 
    isAlive = true
    let firstcard= randomCard()
    let secondcard= randomCard()
    cards=[firstcard, secondcard]
    sum = firstcard + secondcard
   
   renderGame()

}

function renderGame()
{
    //cardsEl.textContent= "Your Cards: " + firstcard + " "+ secondcard 
    cardsEl.textContent= "Your Cards: " 
    
    for(var i=0; i<cards.length; i++)
    {
        cardsEl.textContent+=cards[i]+ " "
    }
    sumEl.textContent = "SUM: " + sum
    if (sum<=20)
{ 
    message ="Draw new card???"
   
}

else if (sum==21)
{
    message ="BLACKJACK!"
    hasBlackjack=true
}
else
{
    message ="You're out!☠"
    isAlive= false
}
  messageEl.textContent= message
  

}

function newCard()
{

    if (isAlive=== true && hasBlackjack=== false)
    {
    console.log("Drawing new card from deck.")
   let newCard=randomCard()

   sum += newCard
   cards.push(newCard)
   console.log(cards)
   renderGame()

    }

}



function randomCard()
{
  let randomdrawn = Math.floor(Math.random()*13) +1
    if(randomdrawn>10)
    {
        return 10
    } 
    else if(randomdrawn===1)
    {
        return 11;
    }
    else
    {
        return randomdrawn

    }
    

}





