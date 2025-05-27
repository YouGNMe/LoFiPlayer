const playBtn = document.getElementById('play-btn');
const audio = document.getElementById('audio');
const cover = document.querySelector('.album-cover');
let isPlaying = false;

playBtn.addEventListener('click', () => {
  if (isPlaying) {
    audio.pause();
    playBtn.textContent = '▶️';
    cover.classList.remove('playing');
  } else {
    audio.play();
    playBtn.textContent = '⏸️';
    cover.classList.add('playing');
  }
  isPlaying = !isPlaying;
});
