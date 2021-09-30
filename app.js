import { playAudio } from './utils.js';
const images = document.querySelectorAll('img');
const sounds = document.querySelectorAll('audio');

images.forEach((image) => {
    image.addEventListener('click', () => {
        const sound = [...sounds].find(sound => sound.className === image.className);
        playAudio(sound);
    });
});

window.addEventListener('keydown', (e) => {
    sounds.forEach((sound) => {
        if (sound.id[0] === e.key) playAudio(sound);
    });
});

