let hPoints = document.getElementById("hp-counter")
htPoints = 0
function hp1() {
    htPoints += 1
    hPoints.textContent = htPoints
}

function hp2() {
    htPoints += 2
    hPoints.textContent = htPoints
}

function hp3() {
    htPoints += 3
    hPoints.textContent = htPoints
}

let gPoints = document.getElementById("gp-counter")
gtPoints = 0
function gp1() {
    gtPoints += 1
    gPoints.textContent = gtPoints
}

function gp2() {
    gtPoints += 2
    gPoints.textContent = gtPoints
}

function gp3() {
    gtPoints += 3
    gPoints.textContent = gtPoints
}

let newPoints = document.getElementById("new-game")
function newGame() {
    htPoints = 0
    gtPoints = 0
    hPoints.textContent = htPoints
    gPoints.textContent = gtPoints
}
