let homeCountEl = document.getElementById("home_counter-el")
let guestCountEl = document.getElementById("guest_counter-el")
let countHome = 0
let countGuest = 0

function incrementHome1() {
    countHome += 1
    homeCountEl.textContent = countHome
}
function incrementHome2() {
    countHome += 2
    homeCountEl.textContent = countHome
}
function incrementHome3() {
    countHome += 3
    homeCountEl.textContent = countHome
}

function incrementGuest1() {
    countGuest += 1
    guestCountEl.textContent = countGuest
}
function incrementGuest2() {
    countGuest += 2
    guestCountEl.textContent = countGuest
}
function incrementGuest3() {
    countGuest += 3
    guestCountEl.textContent = countGuest
}