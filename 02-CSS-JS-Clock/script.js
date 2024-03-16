const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    // fixes hands glitching when finishing a rotation
    if(seconds === 0) secondHand.classList.add('fast')
    if(seconds === 1) secondHand.classList.remove('fast')
    
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    if(minutes === 0) minuteHand.classList.add('fast')
    if(minutes === 1) minuteHand.classList.remove('fast')
    
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    if(hours === 0) hourHand.classList.add('fast')
    if(hours === 1) hourHand.classList.remove('fast')
}
setInterval(setDate, 1000)