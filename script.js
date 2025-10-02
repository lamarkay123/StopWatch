let timer;
let seconds = 0;
let running = false;
function updateDisplay() {
    let secs = seconds % 60;
    document.getElementById("display").innerText = (secs < 10 ? "0" : "") + secs;
}
function start() {
    if (!running) {
        running = true
        timer = setInterval(() => {
            seconds++;
            updateDisplay();
        }, 1000);
    }
}
function stop() {
    running = false
    clearInterval(timer);
}
function reset() {
    stop();
    seconds = 0;
    updateDisplay();
}
