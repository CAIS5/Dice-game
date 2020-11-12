const colors = document.querySelector(".colors");
const diceFaces = Array.from(document.querySelectorAll(".dice"));
const stageOneBtn = document.querySelectorAll('.btn-stage-one button');
const stageTwoBtn = document.querySelectorAll('.btn-container button');

let p1_score = 0 ;
let p2_score = 0;
let p2Turn = false;
init();
function init(){

    // INITIAL STAGE BUTTON
    //  1 - Select all the buttons ( onePlayer, twoPlayer, help  and closeModal button) from stage one.
    //  2 - Assigning task according to the function of button for.
    stageOneBtn.forEach(b => {
        b.addEventListener('click', e => {
            if(e.target.classList[1] == "btn--help"){
                document.querySelector(".overlay").style.display = "block";
            } 

            if(e.target.classList[1] == "btn--close"){
                document.querySelector(".overlay").style.display = "none";
            } 

            if(e.target.classList[1] == "btn--onePlayer" || e.target.classList[1] == "btn--twoPlayers"){
                document.querySelector(".stage-one").style.display = "none";
                document.querySelector(".stage-two").style.display = "block";                 
            } 

        })
    });

    stageTwoBtn.forEach(b => {
        b.addEventListener('click' , e => {
            if (e.target.classList[1] == "btn-back"){
                document.querySelector(".stage-one").style.display = "block";
                document.querySelector(".stage-two").style.display = "none";
                p2_score = 0;
                p1_score = 0; 
                document.querySelector('#player-02--score').textContent = p2_score;
                document.querySelector('#player-01--score').textContent = p1_score;
            } else {
                rollDice();
                let i = addDiceVisibility();
                let val = parseInt(diceFaces[i].attributes.value.textContent);
                console.log(val);
                if(p2Turn){
                    p2_score += val;
                    document.querySelector('#player-02--score').textContent = p2_score;
                    p2Turn = false;
                } else {
                    p1_score += val;
                    document.querySelector('#player-01--score').textContent = p1_score;
                    p2Turn = true;
                }
            }
        })
    })
}


// CHANGING BACKGROUND COLOR
colors.addEventListener("click", (event) => {
  const style = getComputedStyle(event.target);

  const body = document.querySelector("body");
  body.style.backgroundColor = style.backgroundColor;
});

// changingFlexOrder();
function rollDice() {
  let orders = shuffleArray([0, 1, 2, 3, 4, 5]);
  diceFaces.forEach((face, i) => {
    face.style.order = orders[i];
  });
}

function addDiceVisibility() {
  let randomIdx = randomNumber(0, 6);
  diceFaces.forEach((face) => face.classList.remove("dice__visibility"));
  diceFaces[randomIdx].classList.add("dice__visibility");
  return randomIdx;
}
/**
 * Shuffling indices of input array.
 * @param {*} arr : target array for shuffeling .
 *
 */
function shuffleArray(arr) {
  // some methods mutating array such as pop,shift..which will
  let lens = arr.length;
  for (let i = 0; i < lens; i++) {
    let idx = randomNumber(0, arr.length);
    // remove element at specific index.
    let e = arr.splice(idx, 1);
    // push it again into the list
    arr.push(...e);
  }
  return arr;
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * max) + min;
}

