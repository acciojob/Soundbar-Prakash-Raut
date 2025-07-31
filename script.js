//your JS code here. If required.
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const buttons = document.querySelectorAll('.btn');

let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundName = button.textContent;

        if (soundName === 'stop') {
            stopSound();
        } else {
            playSound(soundName);
        }
    });
});

function playSound(sound) {
    stopSound(); // Stop previous sound if any
    currentAudio = new Audio(`./sounds/${sound}.mp3`);
    currentAudio.play();
}

function stopSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
        currentAudio = null;
    }
}