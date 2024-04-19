let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')


function timer(seconds) {
    // clear any existing timers
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000; // now is in milliseconds
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        if (secondsLeft < 0) {
            clearInterval(countdown)
            return;
        }
        displayTimeLeft(secondsLeft);
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainderSeconds = seconds % 60;
    const hours = Math.floor(seconds / 3600)
    const display = `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp);
    let hour = end.getHours();
    const minutes = end.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM'; // determines am or pm
    hour = hour % 12 || 12; // if hour = 1-11 then truthy. if hour = 0 then || will make it 12
    endTime.textContent = `Be Back At ${hour}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60); // * 60 because timer takes in seconds
    this.reset();
})