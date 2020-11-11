const colors = document.querySelector(".colors");

//CHANGING BACKGROUND COLOR
colors.addEventListener("click", (event) => {
  const style = getComputedStyle(event.target);

  const body = document.querySelector("body");
  body.style.backgroundColor = style.backgroundColor;
});
changingFlexOrder();
function changingFlexOrder(){
    const diceFaces = Array.from(document.querySelectorAll('.dice'));
    let orders = shuffleArray([0, 1 ,2,3,4,5]);
    diceFaces.forEach((face,i) => {
        face.style.order = orders[i];
    });
}

/**
 * Shuffling indices of input array. 
 * @param {*} arr : target array for shuffeling . 
 * 
 */
function shuffleArray (arr) {
    //some methods mutating array such as pop,shift..which will 
    let lens = arr.length;
    for(let i = 0 ; i < lens; i++){
        let idx = randomNumber(0,arr.length);
        //remove element at specific index.
        let e  = arr.splice(idx,1);
        //push it again into the list 
        arr.push(...e);
    }
    return arr;

}
function randomNumber(min,max){
    return Math.floor(Math.random() * max) + min;
}




// myMove();
// function myMove() {
//   let count = 3;
//   let id = setInterval(frame, 10000);
//   function frame() {
//     if (count == 0) {
//       clearInterval(id);
//     } else {
//       count--; 
//       let size = diceFaces.length;
//       for(let i = 0; i < size; i++){
//             let nextIdx = (size + (i + 1)) % size;
//            // console.log(`${diceFaces[i].classList.contains('dice__visibility')}`);
//             if(diceFaces[i].classList.contains('dice__visibility')){
//                 diceFaces[i].classList.remove('dice__visibility');
//                 diceFaces[nextIdx].classList.add('dice__visibility');
//                 console.log(`${i} ${nextIdx}`);
//             }
//       }
//     }
//   }
// }
