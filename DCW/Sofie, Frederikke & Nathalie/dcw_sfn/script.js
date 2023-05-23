let amountORP = 499;

const pauseButton = document.querySelector('.pauseBtn');
const pauseScreen = document.querySelector('.pause');

const goodImage = document.querySelector('.goodImg');
const mediumImage = document.querySelector('.mediumImg');
const badImage = document.querySelector('.badImg');

if (amountORP >= 450) {
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-good');
    //Et alternativ - pauseScreen.style.backgroundColor = '#56DF64';
    pauseButton.style.backgroundColor = '#56DF64';
    goodImage.style.display = 'block';
} else if (amountORP >= 250) {
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-medium');
    //Et alternativ - pauseScreen.style.backgroundColor = '#F1F449';
    pauseButton.style.backgroundColor = '#F1F449';
    mediumImage.style.display = 'block';
} else if (amountORP < 250) {
    document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--color-bad');
    //Et alternativ - pauseScreen.style.backgroundColor = '#FB3F3F';
    pauseButton.style.backgroundColor = '#FB3F3F';
    badImage.style.display = 'block';
}