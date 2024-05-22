// SOUNDS
const demo1 = document.querySelector('.demo_automotive--1');
const demo2 = document.querySelector('.demo_automotive--2');
const demo3 = document.querySelector('.demo_automotive--3');
const demo4 = document.querySelector('.demo_automotive--4');
const demo5 = document.querySelector('.demo_automotive--5');

// Define your audio elements (replace with actual sound file URLs)
const sound1 = new Audio('sounds/reverse_system.wav');
const sound2 = new Audio('sounds/horn.wav');
const sound3 = new Audio('sounds/seatbelt.mp3');
const sound4 = new Audio('sounds/horn.wav');
const sound5 = new Audio('sounds/turn_signal.mp3');

// Preload the audio
sound1.preload = 'auto';
sound2.preload = 'auto';
sound3.preload = 'auto';
sound4.preload = 'auto';
sound5.preload = 'auto';

// Function to play or pause the sound
function toggleSound(sound) {
    if (sound.paused) {
        sound.play();
    } else {
        sound.pause();
        sound.currentTime = 0; // Reset playback position
    }
}

// Add event listeners to each button
demo1.addEventListener('click', () => {
    toggleSound(sound1);
});

demo2.addEventListener('click', () => {
    toggleSound(sound2);
});

demo3.addEventListener('click', () => {
    toggleSound(sound3);
});

demo4.addEventListener('click', () => {
    toggleSound(sound4);
});

demo5.addEventListener('click', () => {
    toggleSound(sound5);
});