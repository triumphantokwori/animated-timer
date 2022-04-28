const durationInput = document.querySelector('#duration');
const startButton   = document.querySelector('#start');
const pauseButton   = document.querySelector('#pause');
const circle        = document.querySelector('circle');

const perimeter = circle.getAttribute('r') * 2 * Math.PI;
circle.setAttribute('stroke-dasharray', perimeter);

const colorPicker = function () {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    if (randomColor === "#ffffff") return "green";
    return randomColor;
};
circle.setAttribute('stroke', colorPicker());

let duration;
const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart(totalDuration) {
        console.log('timer started');
        duration = totalDuration;
    },
    onTick(timeRemaining) {
        offset = perimeter * (timeRemaining/ duration) - perimeter;
        circle.setAttribute('stroke-dashoffset', offset);
    },
    onComplete() {
        console.log('timer completed');
    }
});