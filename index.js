let homeScore = 0
let homeEl = document.getElementById('homescore-el')
function homeOne(){
    homeScore += 1
    homeEl.textContent = homeScore
}
function homeTwo(){
    homeScore += 2
    homeEl.textContent = homeScore
}
function homeThree(){
    homeScore += 3
    homeEl.textContent = homeScore
}

let guestScore = 0
let guestEl = document.getElementById('guestscore-el')
function guestOne(){
    guestScore += 1
    guestEl.textContent = guestScore
}
function guestTwo(){
    guestScore += 2
    guestEl.textContent = guestScore
}
function guestThree(){
    guestScore += 3
    guestEl.textContent = guestScore
}