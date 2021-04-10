const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
        .map(node => node.dataset.time)
        .map(timeCode => {
            const [mins, secs] = timeCode.split(':').map(parseFloat);
            return (mins * 60) + secs;
})
.reduce((total, vidSecs) => total + vidSecs);

let secsLeft = seconds;
const hours = Math.floor(secsLeft / 3600);
secsLeft = secsLeft % 3600;
console.log(secsLeft);

const mins = Math.floor(secsLeft / 60);
secsLeft = secsLeft % 60;

console.log(hours, mins, secsLeft);
