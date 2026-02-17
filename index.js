let homeScoreEl = document.getElementById("homeScore")

let guestScoreEl = document.getElementById("guestScore")

let hScore = 0
let gScore = 0


 

function hPlus1() 
{
    hScore += 1
    homeScoreEl.textContent = hScore
    
}

function hPlus2() 
{
    hScore += 2
    homeScoreEl.textContent = hScore
    
}

function hPlus3() 
{
    hScore += 3
    homeScoreEl.textContent = hScore
    
}

function gPlus1() 
{
    gScore += 1
    guestScoreEl.textContent = gScore
    
}

function gPlus2() 
{
    gScore += 2
    guestScoreEl.textContent = gScore
    
}

function gPlus3() 
{
    gScore += 3
    guestScoreEl.textContent = gScore
    
}
console.log(hScore)

