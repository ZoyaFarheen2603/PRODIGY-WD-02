let time = 0;
let interval;
let running = false;
let lapCount = 0; // Variable to keep track of the lap count

function start() {
    if (!running) {
        interval = setInterval(() => {
            time++;
            document.getElementById("display").innerText = formatTime(time);
        }, 1000);
        running = true;
    }
}

function pause() {
    clearInterval(interval);
    running = false;
}

function reset() {
    clearInterval(interval);
    running = false;
    time = 0;
    lapCount = 0; // Reset lap count
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("laps-list").innerHTML = "";
}

function lap() {
    lapCount++; // Increment the lap count
    const lapTime = formatTime(time);
    const lapItem = document.createElement("li");
    lapItem.innerText = `Lap ${lapCount}: ${lapTime}`; // Display the lap count with the time
    document.getElementById("laps-list").appendChild(lapItem);
}

function formatTime(seconds) {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return (
        (hrs < 10 ? "0" + hrs : hrs) +
        ":" +
        (mins < 10 ? "0" + mins : mins) +
        ":" +
        (secs < 10 ? "0" + secs : secs)
    );
}
