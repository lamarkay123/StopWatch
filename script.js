let timer;
let seconds = 0;
let running = false;
function updateDisplay() {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    document.getElementById("display").innerText = (hrs < 10 ? "0" : "") + hrs + ":" + (mins < 10 ? "0" : "") + mins + ":" + (secs < 10 ? "0" : "") + secs;
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
