const buttons = document.querySelectorAll('.btn');
const soundIds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const soundName = button.textContent;
    if (soundName === 'stop') {
      stopSounds();
    } else {
      playSound(soundName);
    }
  });
});

function playSound(soundId) {
  stopSounds(); // stop all before playing
  const audio = document.getElementById(soundId);
  if (audio) {
    audio.play();
  }
}

function stopSounds() {
  soundIds.forEach(id => {
    const audio = document.getElementById(id);
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  });
}
