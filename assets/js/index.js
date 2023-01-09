let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let saveEl = document.getElementById("save-el")

const divHome = document.querySelector('div.home-score');
const divGuest = document.querySelector('div.guest-score');

let countHome = 0
let countGuest = 0

// Function compare
function compare(homeScoreEl, guestScoreEl) {
    if (homeScoreEl > guestScoreEl) {
        divHome.classList.add('highlight');
        divGuest.classList.remove('highlight');
      } else if (homeScoreEl < guestScoreEl) {
        divGuest.classList.add('highlight');
        divHome.classList.remove('highlight');
      } else {
        divHome.classList.remove('highlight');
        divGuest.classList.remove('highlight');
      }
}
compare(countHome, countGuest);

// Function add score to home
function home_add1Points() {
    countHome += 1
    homeScoreEl.textContent = countHome
    compare(countHome, countGuest);
}

function home_add2Points() {
    countHome += 2
    homeScoreEl.textContent = countHome
    compare(countHome, countGuest);
}

function home_add3Points() {
    countHome += 3
    homeScoreEl.textContent = countHome
    compare(countHome, countGuest);
}

// Function add score to guest
function guest_add1Points() {
    countGuest += 1
    guestScoreEl.textContent = countGuest
    compare(countHome, countGuest);
}

function guest_add2Points() {
    countGuest += 2
    guestScoreEl.textContent = countGuest
    compare(countHome, countGuest);
}

function guest_add3Points() {
    countGuest += 3
    guestScoreEl.textContent = countGuest
    compare(countHome, countGuest);
}


// Timer and period function
const timerEl = document.getElementById("timer-el");
const periodEl = document.getElementById("period-el");
const playBtn = document.querySelector('#play-game');
const pauseBtn = document.querySelector('#pause-game');

let timer = 0;
let period = 0;
let timerInterval;

playBtn.addEventListener('click', () => {
    timerInterval = setInterval(() => {

        if (period ===4) {
            clearInterval(timerInterval);
        }
        else {
            timer++

            if (timer === 30) {
                timer = 0;
                period++;
                periodEl.textContent = period;
            }
            timerEl.textContent = timer;

        }    
    }, 1000);
})

pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    compare(homeScoreEl, guestScoreEl);
});



// Function reset and save game
function reset_game() {
    countHome = 0
    homeScoreEl.textContent = countHome
    countGuest = 0
    guestScoreEl.textContent = countGuest
    timer = 0;
    period = 0;
    timerEl.textContent = timer
    periodEl.textContent = period
}

function save_game() {
    countHomeSave = countHome
    countGuestSave = countGuest

    saveEl.textContent = "[HOME: " + countHome + "] - [" + "GUEST: " + countGuest + "]"
}