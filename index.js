let homeScore = 12
let guestScore = 5

document.getElementById("home-score-el").textContent = homeScore
document.getElementById("guest-score-el").textContent = guestScore

function add1ToHome(){
    homeScore += 1
    document.getElementById("home-score-el").textContent = homeScore
}

function add2ToHome(){
    homeScore += 2
    document.getElementById("home-score-el").textContent = homeScore
}

function add3ToHome(){
    homeScore += 3
    document.getElementById("home-score-el").textContent = homeScore
}

function add1ToGuest(){
    guestScore += 1
    document.getElementById("guest-score-el").textContent = guestScore
}

function add2ToGuest(){
    guestScore += 2
    document.getElementById("guest-score-el").textContent = guestScore
}

function add3ToGuest(){
    guestScore += 3
    document.getElementById("guest-score-el").textContent = guestScore
}