let amountORP = 299; // Treshold value

const pauseButton = document.querySelector('.pauseBtn');
const pauseScreen = document.querySelector('.pause');

const goodImage = document.querySelector('.goodImg');
const mediumImage = document.querySelector('.mediumImg');
const badImage = document.querySelector('.badImg');

if (amountORP >= 450) {
    pauseScreen.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-good');
    //Et alternativ - pauseScreen.style.backgroundColor = '#56DF64';
    pauseButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-good');
    goodImage.style.display = 'block';
} else if (amountORP >= 250) {
    pauseScreen.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-medium');
    //Et alternativ - pauseScreen.style.backgroundColor = '#F1F449';
    pauseButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-medium');
    mediumImage.style.display = 'block';
} else if (amountORP < 250) {
    pauseScreen.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-bad');
    //Et alternativ - pauseScreen.style.backgroundColor = '#FB3F3F';
    pauseButton.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-bad');
    badImage.style.display = 'block';
}