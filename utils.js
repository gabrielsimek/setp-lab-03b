export function playAudio(sound){
    sound.currentTime = 0;
    sound.play();
}