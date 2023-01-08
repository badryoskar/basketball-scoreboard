let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let saveEl = document.getElementById("save-el")

let countHome = 0
let countGuest = 0

// Function add score to home
function home_add1Points() {
    countHome += 1
    homeScoreEl.textContent = countHome
}

function home_add2Points() {
    countHome += 2
    homeScoreEl.textContent = countHome
}

function home_add3Points() {
    countHome += 3
    homeScoreEl.textContent = countHome
}

// Function add score to guest
function guest_add1Points() {
    countGuest += 1
    guestScoreEl.textContent = countGuest
}

function guest_add2Points() {
    countGuest += 2
    guestScoreEl.textContent = countGuest
}

function guest_add3Points() {
    countGuest += 3
    guestScoreEl.textContent = countGuest
}

// Function reset and save game
function reset_game() {
    homeScoreEl.textContent = 0
    guestScoreEl.textContent = 0
}

function save_game() {
    countHomeSave = countHome
    countGuestSave = countGuest

    saveEl.textContent = "[HOME: " + countHomeSave + "] - [" + "GUEST: " + countGuestSave + "]"
}