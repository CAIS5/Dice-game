const colors = document.querySelector('.colors');

colors.addEventListener('click',event =>{
    const style =getComputedStyle(event.target);
  
    const body = document.querySelector('body');
    body.style.backgroundColor = style.backgroundColor;
});