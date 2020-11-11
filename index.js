const colors = document.querySelector(".colors");
const diceFaces = Array.from(document.querySelectorAll('.dice'));
const btnHelp = document.querySelector('.btn--help');
const btnClose = document.querySelector('.btn--close');
const btnOnePlayer = document.querySelector('.btn--onePlayer');
const btnTwoPlayer = document.querySelector('.btn--twoPlayers');


//console.log(`${btnTwoPlayer} ${btnOnePlayer} ${btnPlayer}`);

// BUTTON CONTROLL
btnHelp.addEventListener('click', e => {
    document.querySelector('.overlay').style.display = 'block';
});
btnClose.addEventListener('click', e => {
    document.querySelector('.overlay').style.display = 'none';
});

// CHANGING BACKGROUND COLOR
colors.addEventListener("click", (event) => {
    const style = getComputedStyle(event.target);

    const body = document.querySelector("body");
    body.style.backgroundColor = style.backgroundColor;
});

// changingFlexOrder();
function changingFlexOrder() {
    let orders = shuffleArray([
        0,
        1,
        2,
        3,
        4,
        5
    ]);
    diceFaces.forEach((face, i) => {
        face.style.order = orders[i];
    });
    addDiceVisibility();
}

function addDiceVisibility() {
    let randomIdx = randomNumber(0, 6);
    diceFaces.forEach(face => face.classList.remove('dice__visibility'));
    diceFaces[randomIdx].classList.add('dice__visibility');
}
/**
 * Shuffling indices of input array. 
 * @param {*} arr : target array for shuffeling . 
 * 
 */
function shuffleArray(arr) { // some methods mutating array such as pop,shift..which will
    let lens = arr.length;
    for (let i = 0; i < lens; i++) {
        let idx = randomNumber(0, arr.length);
        // remove element at specific index.
        let e = arr.splice(idx, 1);
        // push it again into the list
        arr.push(... e);
    }
    return arr;
}

function randomNumber(min, max) {
    return Math.floor(Math.random() * max) + min;
}
